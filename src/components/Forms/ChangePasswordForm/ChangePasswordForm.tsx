import { useAppDispatch } from '@/store/hooks';
import { setUser } from '@/store/userSlice';
import { changePassword } from '@/api/users';

import Button from '@/components/Button';
import PasswordInput from '@/components/PasswordInput';
import useCustomFormik from '@/hooks/useCustomFormik';
import { changePasswordSchema as validationSchema } from '@/validationSchemas/changePasswordForm';
import { ChangeFormWrapper } from './styles';

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
      thirdPassword: '',
    },
    validationSchema,
    onSubmit,
  });

  const secondPassText = formik.errors.secondPassword || 'Enter your password';
  const thirdPassText = formik.errors.thirdPassword || 'Repeat your password without errors';

  return (
    <ChangeFormWrapper>
      <form className="change-form" onSubmit={formik.handleSubmit}>
        <div>
          <PasswordInput
            id="password"
            name="password"
            type="password"
            placeholder="Old password"
            onChange={formik.handleChange}
            value={formik.values.password}
            clearInputValue={() => clearInputValue('password')}
            $isFilled={!!formik.values.password}
            isError={!!formik.errors.password?.length}
            signature="Old password"
           />
        </div>
        <div>
          <PasswordInput
            id="secondPassword"
            name="secondPassword"
            type="password"
            placeholder="New password"
            onChange={formik.handleChange}
            value={formik.values.secondPassword}
            clearInputValue={() => clearInputValue('secondPassword')}
            $isFilled={!!formik.values.secondPassword}
            isError={!!formik.errors.secondPassword?.length}
            signature="New password"
           />
          <p className="hint">{secondPassText}</p>
        </div>
        <div>
          <PasswordInput
            id="thirdPassword"
            name="thirdPassword"
            type="password"
            placeholder="New password"
            onChange={formik.handleChange}
            value={formik.values.thirdPassword}
            clearInputValue={() => clearInputValue('thirdPassword')}
            $isFilled={!!formik.values.thirdPassword}
            isError={!!formik.errors.thirdPassword?.length}
            signature="New password"
           />
          <p className="hint">{thirdPassText}</p>
        </div>
        <Button type="submit" className="button">
          Confirm
        </Button>
      </form>
    </ChangeFormWrapper>
  );
};

export default ChangePasswordForm;
