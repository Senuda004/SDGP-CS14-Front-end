import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from './Sidebar';
import AiChatbot from './AiChatbot'; // Import your AiChatbot component
import Dashboard from './Dashboard'; // Import your Dashboard component
import './Home.css';

const Home = () => {
  const [open, setOpen] = useState(true);

  const toggleSidebar = () => {
    setOpen(!open);
  };

  return (
    <>
      <div className='flex'>
        <Sidebar isOpen={open} toggleSidebar={toggleSidebar} />

        <div className='p-7 text-2xl font-semibold flex-1 h-screen'>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/ai-chatbot" element={<AiChatbot />} />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default Home;
