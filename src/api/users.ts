import type { UserType } from '@/models/user';
import { config } from '../../config';

const createUserDb = async (options: {login: string; password: string}): Promise<UserType> => {
  const res = await fetch(`http://${config.HOST}:${config.PORT}/api/user/create`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(options),
    });

  return res.json();
};

export { createUserDb };
