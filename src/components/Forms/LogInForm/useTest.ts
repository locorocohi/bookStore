// import { useFormik } from 'formik';

// type OptionsType = {
//   initialValues: unknown;
//   validationSchema: unknown;
//   onSubmit: () => void;
// };

// const useTest = (options: OptionsType) => {
//   const formik = useFormik({
//     initialValues: options.initialValues,
//     validationSchema: options.validationSchema,
//     validateOnChange: false,
//     onSubmit: options.onSubmit,
//   });

//   const clearInputValue = (valueType: string) => {
//     formik.setFieldValue(valueType, '');
//   };

//   return {
//     values: formik.values,
//     errors: formik.errors,
//     clearInputValue,
//   };
// };

// export default useTest;
