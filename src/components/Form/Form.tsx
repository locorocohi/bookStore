import passwordCloseEye from '@/images/Hide.svg';
import emailIcon from '@/images/Email.svg';

import Image from 'next/image';
import { saveNewUser } from '@/api/users';
import { useFormik } from 'formik';
import { signUpSchema as validationSchema } from '@/validationSchemas/signUpForm';
import { FormWrapper } from './StyledForm';
import Button from '../Button';
import Input from '../Input';

const SignUpForm: React.FC = () => {
  const onSubmit = async ({ email, password }:{email: string; password:string }) => {
    const { user } = await saveNewUser({ email, password });
    return user;
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      repeatedPassword: '',
    },
    validationSchema,
    onSubmit,
  });

  return (
    <FormWrapper>
      <h1>Log In</h1>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="">
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="Email"
            onChange={formik.handleChange}
            value={formik.values.email}
          >
            <Image src={emailIcon} alt="email"
            width={24} height={24}
             />
          </Input>
          {formik.errors.email
            ? <p>{formik.errors.email}</p>
            : <p>Enter your email</p>}
        </label>
        <label>
          <Input
            id="password"
            name="password"
            type="password"
            placeholder="Password"
            onChange={formik.handleChange}
            value={formik.values.password}
          >
            <Image src={passwordCloseEye} alt="eye" priority />
          </Input>
          {formik.errors.password
            ? <p>{formik.errors.password}</p>
            : <p>Enter your password</p>}
        </label>
        <label>
          <Input
            id="repeatedPassword"
            name="repeatedPassword"
            type="password"
            placeholder="Password replay"
            onChange={formik.handleChange}
            value={formik.values.repeatedPassword}
          >
            <Image src={passwordCloseEye} alt="eye" priority />
          </Input>
          {formik.errors.repeatedPassword
            ? <p>{formik.errors.repeatedPassword}</p>
            : <p>Repeat your password without errors</p>}
        </label>
        <Button type="submit" className="button">Log In</Button>
      </form>
    </FormWrapper>
  );
};

export default SignUpForm;
