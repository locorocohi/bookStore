import AuthSection from '@/components/AuthSection';
import LogInForm from '@/components/Forms/LogInForm/Form';

const LogIn = () => {
  return (
    <AuthSection>
        <LogInForm />
    </AuthSection>
  );
};

// export const getServerSideProps = async (ctx) => {
//   // eslint-disable-next-line no-console
//   console.log(ctx);
//   const user = false;
//   if (user) {
//     return { props: { test: 'TEST', code: 200 } };
//   }

//   return {
//     redirect: {
//       destination: '/',
//     },
//     props: {},
//   };
// };

export default LogIn;
