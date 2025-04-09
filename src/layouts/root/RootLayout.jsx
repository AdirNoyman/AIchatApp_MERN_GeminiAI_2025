import { Link, Outlet } from 'react-router-dom';
import './rootLayout.css';
import { ClerkProvider } from '@clerk/clerk-react';
import {
  SignedIn, 
  UserButton,
} from '@clerk/clerk-react';

// Import your Publishable Key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error('Missing Publishable Key');
}

const RootLayout = () => {
  return (
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl='/'>
      <div className='rootLayout'>
        <header>
          <Link to='/' className='logo'>
            <img src='/logo.png' alt='logo' />
            <span>Adiros AI</span>
          </Link>
          <div className='user'>
            {/* The user auth button will be seen only if you are signed in and if not, you will see the main auth login window and not the dashboard */}
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </header>
        <main>
          <Outlet />
        </main>
      </div>
    </ClerkProvider>
  );
};

export default RootLayout;
