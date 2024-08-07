import { setToken } from '@/axios/instance';
import { getMe } from '@/api/users';

import type { GetServerSideProps } from 'next';
import type { UserType } from '@/models/user';

import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import ProfileSection from '@/components/ProfileSection';
import { Wrapper } from './styles';

type PropsType = {
  data: UserType;
};

const Profile = (props:PropsType) => {
  return (
    <Wrapper>

      <Header />

      <ProfileSection userData={props.data} />

      <Footer />

    </Wrapper>
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

export default Profile;
