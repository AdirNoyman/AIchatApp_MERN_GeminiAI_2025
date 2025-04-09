import './signUp.css'
import { SignUp } from '@clerk/clerk-react';

const SignUPage = () => {
  return (
    <div className='signIn'>
      <SignUp path='/sign-up' />
    </div>
  );
};

export default SignUPage;