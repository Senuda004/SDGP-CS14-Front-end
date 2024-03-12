import React , {useState,useEffect} from 'react';


const AiChatbot = () => {
  
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

