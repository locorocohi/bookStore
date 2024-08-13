import Image from 'next/image';

import { changeSchema as validationSchema } from '@/validationSchemas/changeForm';
import { changeInfo } from '@/api/users';
import { setUser } from '@/store/userSlice';
import { useAppDispatch } from '@/store/hooks';
import useCustomFormik from '@/hooks/useCustomFormik';

import emailIcon from '@/images/email.svg';
import profilePic from '@/images/profile.svg';

import Input from '@/components/Input';
import Button from '@/components/Button';
import { FormWrapper } from '../SignUpForm/styles';

type PropsType = {
  toggleInfoForm: () => void;
};

const ChangeForm: React.FC<PropsType> = (props) => {
  const dispatch = useAppDispatch();
  const onSubmit = async ({ name = '', email }:{ email: string; name:string }) => {
    const user = await changeInfo({ name, email });
    dispatch(setUser(user));
    props.toggleInfoForm();
  };

  const { formik, clearInputValue } = useCustomFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit,
  });

  const emailText = formik.errors.email || 'Enter your email';

  return (
    <FormWrapper>
      <form onSubmit={formik.handleSubmit}>
        <label>
          <Input
          id="name"
          name="name"
          type="text"
          placeholder="Name"
          onChange={formik.handleChange}
          value={formik.values.name}
          clearInputValue={() => clearInputValue('name')}
          $isFilled={!!formik.values.name}
          isError={!!formik.errors.name?.length}
          signature="Name"
          >
            <Image src={profilePic} alt="name"
              width={24} height={24}
            />
          </Input>
          <p className="hint">Enter your name</p>
        </label>
        <label>
          <Input
          id="email"
          name="email"
          type="email"
          placeholder="Email"
          onChange={formik.handleChange}
          value={formik.values.email}
          clearInputValue={() => clearInputValue('email')}
          $isFilled={!!formik.values.email}
          isError={!!formik.errors.email?.length}
          signature="Email"
          >
            <Image src={emailIcon} alt="email"
              width={24} height={24}
            />
          </Input>
          <p className="hint">{emailText}</p>
        </label>
        <Button type="submit" className="button">Submit</Button>
      </form>
    </FormWrapper>
  );
};

export default ChangeForm;
