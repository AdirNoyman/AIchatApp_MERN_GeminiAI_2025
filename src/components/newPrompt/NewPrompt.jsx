import './newPrompt.css';
import { useEffect, useRef } from 'react';

const NewPrompt = () => {

  const endRef = useRef(null)

  useEffect(() => {
    endRef.current.scrollIntoView({ behavior: 'smooth' })
  }, [])

  return (
    <>
    {/* WHERE A NEW MESSAGE ON THE CHAT WILL BE*/}
    <div className="endChat" ref={endRef}></div>
      <form className='newForm'>
        <label htmlFor='file'>
          <img src="/attachment.png" alt="add file" />
        </label>
        <input id="file" type='file' multiple={false} hidden/>
        <input type="text" placeholder='Ask me anything...'/>
        <button>
          <img src="/arrow.png" alt="submit" />
        </button>
      </form>
    </>
  );
};

export default NewPrompt;
