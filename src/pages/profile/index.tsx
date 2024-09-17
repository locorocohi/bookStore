import React from 'react';
import { setToken } from '@/axios/instance';
import { getMe } from '@/api/users';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { setUser } from '@/store/userSlice';

import type { GetServerSideProps } from 'next';
import type { UserType } from '@/models/user';

import ProfileSection from '@/components/ProfileSection';
import { setBooksCount } from '@/store/cartSlice';

type PropsType = {
  data: {findedUser: UserType; booksInCartCount: number};
};

const Profile: React.FC<PropsType> = (props) => {
  const user = useAppSelector((store) => store.user.user);

  const dispatch = useAppDispatch();

  React.useEffect(() => {
    if (user) {
      return;
    }

    dispatch(setUser(props.data.findedUser));
    dispatch(setBooksCount(props.data.booksInCartCount));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    user ? <ProfileSection /> : null
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const token = ctx.req.cookies.accessToken;
  setToken(token);
  const data = await getMe();

  if (!data) {
    return {
      redirect: { destination: '/login', statusCode: 303 },
    };
  }

  return {
    props: { data },
  };
};

export default Profile;
