import instance from '@/axios/instance';

const saveNewUser = async (options: {email: string; password: string}) => {
  try {
    const user = await instance.post('user/create', options);
    return user.data;
  } catch (error) {
    console.log(error);
  }
};

export { saveNewUser };
