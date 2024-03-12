import React , {useState,useEffect} from 'react';

import { useLocation } from 'react-router-dom';

function delay(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

const fakeApi = async () => {
  await delay(1000);
  return {
    src: "https://dulnethbuilds-nutrimate-ai-chatbot.hf.space"
  };
};


const AiChatbot = () => {
  const [iframeUrl, setIframeUrl] = useState(null);

  const loadIframe = async () => {
    const { src } = await fakeApi();
    setIframeUrl(src);
  };

  useEffect(() => {
    loadIframe();
  }, []);

  
  return (
    <div>
      <h1>Chat Bot</h1>
      {/* Integration of Ai chatbot LLM published on Hugging face  */}
      <iframe
        loading='lazy'
        title='chatbot feature'
        src="https://dulnethbuilds-nutrimate-ai-chatbot.hf.space"
        width="100%"
        height="635"
        className='pt-10'
        ></iframe>

     



    
    </div>
  );
};

export default AiChatbot;

