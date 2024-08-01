import Header from '@/components/Header/Header';
import AuthSection from '@/components/AuthSection';
import Footer from '@/components/Footer/Footer';
import SignUpForm from '@/components/Forms/SignUpForm/Form';

const SignUp = () => {
  return (
    <>
      <Header />

      <AuthSection>
        <SignUpForm />
      </AuthSection>

      <Footer />
    </>
  );
};

export default SignUp;
