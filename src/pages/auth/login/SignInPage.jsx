import './signIn.css';
import { SignIn } from '@clerk/clerk-react';

const SignInPage = () => {
  return (
    <div className='signIn'>
      <SignIn path='/sign-in' />
    </div>
  );
};

export default SignInPage;
