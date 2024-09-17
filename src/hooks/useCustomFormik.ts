import { useFormik } from 'formik';

type ValuesType =
  | {
      password: string;
      secondPassword: string;
      thirdPassword: string;
    }
  | {
      email: string;
      password: string;
      secondPassword: string;
    }
  | {
      email: string;
      password: string;
    };

type OptionsType<T> = {
  initialValues: T;
  validationSchema?: object;
  validateOnChange?: boolean;
  onSubmit: (options: T) => Promise<void>;
};

const useCustomFormik = <T extends ValuesType>(options: OptionsType<T>) => {
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
