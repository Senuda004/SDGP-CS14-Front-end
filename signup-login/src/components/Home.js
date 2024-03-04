import React, { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Sidebar from './Sidebar';
import AiChatbot from './AiChatbot';
import Dashboard from './Dashboard';
import CalorieMeter from './CalorieMeter';
import './Home.css';
import ProtectedRoute from './ProtectedRoute';

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
            <Route path="/dashboard" element={<ProtectedRoute component={Dashboard} />} />
            <Route path="/calorie-meter" element={<ProtectedRoute component={CalorieMeter} />} />
            <Route path="/ai-chatbot" element={<ProtectedRoute component={AiChatbot} />} />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default Home;
