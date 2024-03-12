import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import Sidebar from './Sidebar';
import AiChatbot from './AiChatbot';
import Dashboard from './Dashboard';
import CalorieMeter from './CalorieMeter';
import NotFound from './NotFound'; // Import your custom 404 page component
import ProtectedRoute from './ProtectedRoute';
import HealthQuiz from './HealthQuiz';
const Home = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [open, setOpen] = useState(true);
  const loc = useLocation();

  const toggleSidebar = () => {
    setOpen(!open);
  };
  

  const EmptyComponent =()=>{
    return(
      <div>

      </div>
    )
  }

  useEffect(() => {
    // Redirect to "/not-found" if the current path doesn't match any specified routes
    if (!['/dashboard', '/calorie-meter', '/ai-chatbot', '/', '/signup', '/forgot-password',"/health-quiz"].includes(location.pathname)) {
      navigate('/not-found');
    }
  }, [location.pathname, navigate]);

  // Check if the current path is "/home" before rendering the component
  if (location.pathname === '/' || location.pathname === '/signup' || location.pathname === '/forgot-password') {
    return null;
  }

  return (
    <>
      <div className='flex'>
        <Sidebar isOpen={open} toggleSidebar={toggleSidebar}/>

        <div className={`p-7 text-2xl font-semibold flex-1 h-screen ${location.pathname === '/not-found' ? 'hidden' : ''}`}>
        {/* This is where we actually render ai chatbot and not in routes- purpose is to not to relaod Iframe */}
        <div hidden={loc.pathname !== "/ai-chatbot"}>
        <AiChatbot />
        </div>
          
          <Routes>
       
            <Route path="/dashboard" element={<ProtectedRoute component={Dashboard} />} />
            <Route path="/calorie-meter" element={<ProtectedRoute component={CalorieMeter} />} />
            {/* {Retrun an empty compoenent  */}
            <Route path="/ai-chatbot" element={<ProtectedRoute component={EmptyComponent} />} />
            {/* Health quiz route needs update */}
            <Route path="/health-quiz" element={<HealthQuiz/>}  />
            {/* Full-screen Not Found page without the sidebar */}
            <Route path="/not-found" element={<NotFound />} />
          </Routes>
        </div>

        {/* Full-screen Not Found page */}
        <div className={`p-7 text-2xl font-semibold flex-1 h-screen bg-amber-400 ${location.pathname === '/not-found' ? '' : 'hidden'}`}>
          <NotFound />
        </div>
      </div>
    </>
  );
};

export default Home;
