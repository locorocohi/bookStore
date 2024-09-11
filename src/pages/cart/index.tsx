import type { GetServerSideProps } from 'next';

import { getBooksFromCart } from '@/api/cart';

import CartSection from '@/components/CartSection/CartSection';
import EmptyCartSection from '@/components/EmptyCartSection/EmptyCartSection';

const Cart = () => {
  return (
      // <EmptyCartSection />
      <CartSection />
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const data = await getBooksFromCart();
  console.log('data', data);
  return {
    props: { data: null },
  };
};

export default Cart;
