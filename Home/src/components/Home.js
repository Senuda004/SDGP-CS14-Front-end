import React, { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Sidebar from './Sidebar';
import AiChatbot from './AiChatbot';
import Dashboard from './Dashboard';
import CalorieMeter from './CalorieMeter';
import './Home.css';

const Home = () => {
  const location = useLocation();
  const [open, setOpen] = useState(true);

  const toggleSidebar = () => {
    setOpen(!open);
  };

  // Check if the current path is "/home" before rendering the component
  if (location.pathname === '/' || location.pathname === '/signup' || location.pathname === '/forgot-password') {
    return null;
  }

  return (
    <>
      <div className='flex'>
        <Sidebar isOpen={open} toggleSidebar={toggleSidebar}/>

        <div className='p-7 text-2xl font-semibold flex-1 h-screen'>
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/calorie-meter" element={<CalorieMeter />} />
            <Route path="/ai-chatbot" element={<AiChatbot />} />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default Home;
