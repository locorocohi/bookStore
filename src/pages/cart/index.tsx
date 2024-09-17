import type { GetServerSideProps } from 'next';

import { getBooksFromCart } from '@/api/cart';

import CartSection from '@/components/CartSection/CartSection';
import EmptyCartSection from '@/components/EmptyCartSection/EmptyCartSection';
import { setToken } from '@/axios/instance';
import type { BookInCartType } from '@/models/bookInCart';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { setBooksInCart } from '@/store/cartSlice';
import { useEffect } from 'react';
import { getMe } from '@/api/users';
import type { UserType } from '@/models/user';
import { setUser } from '@/store/userSlice';

type PropsType = {
  data: {
    user?: {findedUser: UserType; booksInCartCount: number};
    booksInCart: { booksInCart: BookInCartType[];
      total: number;
    };
  };
};

const Cart: React.FC<PropsType> = (props) => {
  const dispatch = useAppDispatch();
  const booksInCart = useAppSelector((state) => state.cart.booksInCart);

  useEffect(() => {
    dispatch(setBooksInCart(props.data.booksInCart));
    dispatch(setUser(props.data.user?.findedUser));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    booksInCart.length < 1
      ? <EmptyCartSection />
      : <CartSection />
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const token = ctx.req.cookies.accessToken;
  setToken(token);
  const [user, booksInCart] = await Promise.allSettled([getMe(), getBooksFromCart()]);

  const data = { user: null, booksInCart: null };
  if (user.status === 'fulfilled') {
    data.user = user.value;
  }

  if (booksInCart.status === 'fulfilled') {
    data.booksInCart = booksInCart.value;
  }

  return {
    props: { data },
  };
};

export default Cart;
