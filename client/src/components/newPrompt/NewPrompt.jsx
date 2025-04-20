import Upload from '../upload/Upload';
import './newPrompt.css';
import { useEffect, useRef, useState } from 'react';
import { IKImage } from 'imagekitio-react';

const NewPrompt = () => {

  const [image, setImage] = useState({
    isLoading: false,
    error:"",
    imgData: {},
  })

  const endRef = useRef(null)

  useEffect(() => {
    endRef.current.scrollIntoView({ behavior: 'smooth' })
  }, [])

  return (
    <>
    {/* WHERE A NEW MESSAGE CONTENT FROM THE USER ON THE CHAT WILL BE*/}
    {image.isLoading && (
      <div className="loading">        
        <p>Loading 🙄...</p>
      </div>
    )}
    {image.imgData?.filePath && (
      <IKImage urlEndpoint={import.meta.env.VITE_IMAGE_KIT_ENDPOINT} path={image.imgData?.filePath} width="380" transformation={[{width: 380}]}/>
    )}
    <div className="endChat" ref={endRef}></div>
    {/* INPUT CHAT FIELD */}
      <form className='newForm'>
        <Upload setImg={setImage}/>
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
