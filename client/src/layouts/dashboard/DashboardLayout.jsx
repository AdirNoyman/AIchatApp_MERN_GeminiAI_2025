import { Outlet, useNavigate } from 'react-router-dom';
import './DashboardLayout.css';
import { useAuth } from '@clerk/clerk-react';
import { useEffect } from 'react';
import ChatList from '../../components/chatList/ChatList';

const DashboardLayout = () => {
  const { userId, isLoaded } = useAuth();

  const navigate = useNavigate();

  useEffect(() => {
    if (isLoaded && !userId) {
      navigate('/sign-in');
    }
  }, [userId, isLoaded, navigate]);

  if (!isLoaded) {
    return <div className='loading'>Loading 🙄...</div>;
  }

  return (
    <div className='dashboardLayout'>
      <div className='menu'><ChatList /></div>
      <div className='content'>
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
