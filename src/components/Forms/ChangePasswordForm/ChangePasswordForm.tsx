import { useAppDispatch } from '@/store/hooks';
import { setUser } from '@/store/userSlice';
import { changePassword } from '@/api/users';

import Button from '@/components/Button';
import PasswordInput from '@/components/PasswordInput';
import useCustomFormik from '@/hooks/useCustomFormik';
import { changePasswordSchema as validationSchema } from '@/validationSchemas/changePasswordForm';
import { FormWrapper } from '../SignUpForm/styles';

type PropsType = {
  togglePasswordForm: () => void;
};

const ChangePasswordForm: React.FC<PropsType> = (props) => {
  const dispatch = useAppDispatch();
  const onSubmit = async ({
    password,
    secondPassword,
  }: {
    password: string;
    secondPassword: string;
  }) => {
    const user = await changePassword({ password, secondPassword });
    dispatch(setUser(user));
    props.togglePasswordForm();
  };

  const { formik, clearInputValue } = useCustomFormik({
    initialValues: {
      password: '',
      secondPassword: '',
    },
    validationSchema,
    onSubmit,
  });
  const passText = formik.errors.password || 'Enter your password';
  const secondPassText = formik.errors.secondPassword || 'Enter NEW password';

  return (
    <FormWrapper>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <PasswordInput
            id="password"
            name="password"
            type="password"
            placeholder="Password"
            onChange={formik.handleChange}
            value={formik.values.password}
            clearInputValue={() => clearInputValue('password')}
            $isFilled={!!formik.values.password}
            isError={!!formik.errors.password?.length}
            signature="Password"
           />
          <p className="hint">{passText}</p>
        </div>
        <div>
          <PasswordInput
            id="secondPassword"
            name="secondPassword"
            type="password"
            placeholder="Password replay"
            onChange={formik.handleChange}
            value={formik.values.secondPassword}
            clearInputValue={() => clearInputValue('secondPassword')}
            $isFilled={!!formik.values.secondPassword}
            isError={!!formik.errors.secondPassword?.length}
            signature="New password"
           />
          <p className="hint">{secondPassText}</p>
        </div>
        <Button type="submit" className="button">
          Submit
        </Button>
      </form>
    </FormWrapper>
  );
};

export default ChangePasswordForm;
