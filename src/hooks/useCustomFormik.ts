import type { FormikHelpers } from 'formik';
import { useFormik } from 'formik';

type OptionsType = {
  initialValues: {
    email: string;
    password: string;
    repeatedPassword?: string;
  };
  validationSchema?: object;
  validateOnChange?: boolean;
  onSubmit: (values: OptionsType['initialValues'], formikHelpers: FormikHelpers<OptionsType['initialValues']>) => void | Promise<unknown>;
};

const useCustomFormik = (options: OptionsType) => {
  const formik = useFormik({
    initialValues: options.initialValues,
    validationSchema: options.validationSchema,
    validateOnChange: false,
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
