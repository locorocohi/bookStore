import instance from '@/axios/instance';
import { setCookie } from 'cookies-next';

const saveNewUser = async (options: {email: string; password: string}) => {
  try {
    const user = await instance.post('user/create', options);
    const { accessToken, userData } = user.data;
    setCookie('accessToken', accessToken);
    return userData;
  } catch (error) {
    console.log(error);
  }
};

export { saveNewUser };
