import './signUp.css'
import { SignUp } from '@clerk/clerk-react';

const SignUPage = () => {
  return (
    <div className='signUp'>
      <SignUp path='/sign-up' signInUrl='/sign-in'/>
    </div>
  );
};

export default SignUPage;