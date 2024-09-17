import type { GetServerSideProps } from 'next';

import EmptyCartSection from '@/components/EmptyCartSection/EmptyCartSection';
import { setToken } from '@/axios/instance';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { setBooksCount } from '@/store/cartSlice';
import { useEffect } from 'react';
import { getMe } from '@/api/users';
import type { UserType } from '@/models/user';
import { setUser } from '@/store/userSlice';
import FavoriteSection from '@/components/FavoriteSection/FavoriteSection';

type PropsType = {
  data: {findedUser: UserType; booksInCartCount: number};

};

const Favorite: React.FC<PropsType> = (props) => {
  const dispatch = useAppDispatch();
  const favoriteBooks = useAppSelector((state) => state.user.user?.favorites);
  useEffect(() => {
    dispatch(setUser(props.data.findedUser));
    dispatch(setBooksCount(props.data.booksInCartCount));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    !favoriteBooks || favoriteBooks.length < 1
      ? <EmptyCartSection />
      : <FavoriteSection />
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const token = ctx.req.cookies.accessToken;
  setToken(token);
  const data = await getMe();
  return {
    props: { data },
  };
};

export default Favorite;
