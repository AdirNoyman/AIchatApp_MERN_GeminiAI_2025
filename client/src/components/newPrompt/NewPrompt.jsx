import Upload from '../upload/Upload';
import './newPrompt.css';
import { useEffect, useRef, useState } from 'react';
import { IKImage } from 'imagekitio-react';
import GeminiAI from '../../lib/gemini';
import Markdown from 'react-markdown';

const NewPrompt = () => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  const [image, setImage] = useState({
    isLoading: false,
    error: '',
    imgData: {},
  });

  const endRef = useRef(null);

  // Scroll to the end of the chat when page initially loads or when a new question/answer/image is added
  useEffect(() => {
    endRef.current.scrollIntoView({ behavior: 'smooth' });
  }, [question, answer,image.imgData]);

  async function sendPromptToAI(userPrompt) {
    setQuestion(userPrompt);
    const result = await GeminiAI(userPrompt);
    setAnswer(result);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const text = e.target.userPrompt.value;

    if (!text) {
      return;
    }
    sendPromptToAI(text);

    e.target.userPrompt.value = '';
  };

  return (
    <>
      {/* WHERE A NEW MESSAGE CONTENT FROM THE USER ON THE CHAT WILL BE*/}
      {image.isLoading && (
        <div className='loading'>
          <p>Loading 🙄...</p>
        </div>
      )}
      {image.imgData?.filePath && (
        <IKImage
          urlEndpoint={import.meta.env.VITE_IMAGE_KIT_ENDPOINT}
          path={image.imgData?.filePath}
          width='380'
          transformation={[{ width: 380 }]}
        />
      )}
      {question && <div className='message user'>{question}</div>}
      {answer && (
        <div className='message'>
          <Markdown>{answer}</Markdown>
        </div>
      )}
      <div className='endChat' ref={endRef}></div>
      {/* INPUT CHAT FIELD */}

      <form className='newForm' onSubmit={handleSubmit}>
        <Upload setImg={setImage} />
        <input id='file' type='file' multiple={false} hidden />
        <input type='text' name='userPrompt' placeholder='Ask me anything...' />
        <button>
          <img src='/arrow.png' alt='submit' />
        </button>
      </form>
    </>
  );
};

export default NewPrompt;
