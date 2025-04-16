import './dashboard.css';
const Dashboard = () => {
  return (
    <div className='dashboard'>
      <div className='texts'>       
        <div className='options'>
          <div className='option'>
            <img src='/chat.png' alt='option' />
            <span>Create a new chat</span>
          </div>
          <div className='option'>
            <img src='/image.png' alt='option' />
            <span>Generate a new image</span>
          </div>
          <div className='option'>
            <img src='/code.png' alt='option' />
            <span>Generate a code snippet</span>
          </div>
        </div>
      </div>
      <div className='formContainer'>
        <form action=''>
          <input type='text' placeholder='Ask me anything...' />
          <button >
            <img src='/arrow.png' alt="submit" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Dashboard;
