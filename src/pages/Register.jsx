import { Helmet, HelmetProvider } from 'react-helmet-async';

import RegisterForm from '../components/registerForm/RegisterForm';

export default function Register() {
  return (
    <HelmetProvider>
      <div>
        <Helmet>
          <title>Register</title>
        </Helmet>
        <RegisterForm />
      </div>
    </HelmetProvider>
  );
}
