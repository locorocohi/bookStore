import { setToken } from '@/axios/instance';
import { getMe } from '@/api/users';
import { useAppDispatch } from '@/store/hooks';
import { setUser } from '@/store/userSlice';

import type { GetServerSideProps } from 'next';
import type { UserType } from '@/models/user';

import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import ProfileSection from '@/components/ProfileSection';
import { Wrapper } from './styles';

export interface IUserData extends Omit<UserType, 'password'> {}

type PropsType = {
  data: IUserData;
};

const Profile = (props: PropsType) => {
  const dispatch = useAppDispatch();
  dispatch(setUser(props.data));

  return (
    <Wrapper>

      <Header />

      <ProfileSection />

      <Footer />

    </Wrapper>
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
