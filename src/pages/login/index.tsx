import Header from '@/components/Header/Header';
import AuthSection from '@/components/AuthSection';
import Footer from '@/components/Footer/Footer';
import LogInForm from '@/components/Forms/LogInForm/Form';

const LogIn = () => {
  return (
    <>
      <Header />

      <AuthSection>
        <LogInForm />
      </AuthSection>

      <Footer />
    </>
  );
};

export default LogIn;
