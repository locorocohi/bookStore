import type { GetServerSideProps } from 'next';

import { getBooksFromCart } from '@/api/cart';

import CartSection from '@/components/CartSection/CartSection';
import EmptyCartSection from '@/components/EmptyCartSection/EmptyCartSection';
import { setToken } from '@/axios/instance';
import type { BookInCartType } from '@/models/bookInCart';

type PropsType = {
  data: {
    booksInCart: BookInCartType[];
    total: number;
  };
};

const Cart: React.FC<PropsType> = (props) => {
  return (
    props.data.booksInCart.length < 1
      ? <EmptyCartSection />
      : <CartSection />
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const token = ctx.req.cookies.accessToken;
  setToken(token);

  const data = await getBooksFromCart();
  return {
    props: { data },
  };
};

export default Cart;
