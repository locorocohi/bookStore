import instance from '@/axios/instance';

const saveNewUser = async (options: {email: string; password: string}) => {
  const user = await instance.post('user/create', options);
  return user.data;
};

export { saveNewUser };
