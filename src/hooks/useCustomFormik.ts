import { useFormik } from 'formik';

type ValuesType = {
  name?: string;
  email?: string;
  password?: string;
  secondPassword?: string;
  thirdPassword?: string;
};

type OptionsType = {
  initialValues: ValuesType;
  validationSchema?: object;
  validateOnChange?: boolean;
  onSubmit: (options: ValuesType) => Promise<void>;
};

const useCustomFormik = (options: OptionsType) => {
  const formik = useFormik({
    initialValues: options.initialValues,
    validationSchema: options.validationSchema,
    onSubmit: options.onSubmit,
  });

  const clearInputValue = (valueType: string) => {
    formik.setFieldValue(valueType, '');
  };

  return {
    formik,
    clearInputValue,
  };
};

export default useCustomFormik;
