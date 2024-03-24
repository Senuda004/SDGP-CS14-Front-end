import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import Sidebar from './Sidebar';
import AiChatbot from './AiChatbot';
import Dashboard from './Dashboard';
import CalorieMeter from './CalorieMeter';
import Blog from './Blog-test';
import NotFound from './NotFound'; // Import your custom 404 page component
import ProtectedRoute from './ProtectedRoute';
import HealthQuiz from './HealthQuiz';
import BlogHome from '../pages/bloghome/BlogHome';
import Single from '../pages/single/Single';
import Write from '../pages/write/Write';


const Home = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [open, setOpen] = useState(true);
  const loc = useLocation();

  const toggleSidebar = () => {
    setOpen(!open);
  };
  

  // Our route is oriteceted, but we are retruning null as we already rendered aicahtbot to avoid refresh whn gone to ai chatbot
  // This implementation is just protected route compoenent requires  an compoenent but we give it a null component to avoid errora
  const EmptyComponent =()=>{
    return(
      <div>

      </div>
    )
  }

  // Check if the current path is "/home" before rendering the component
  if (location.pathname === '/' || location.pathname === '/signup' || location.pathname === '/forgot-password' || location.pathname === "/login" || location.pathname === "/health-quiz" || location.pathname === "/not-found" ) {
    return null;
  }

  return (
    <>
      <div className='flex flex-row'>
        <Sidebar isOpen={open} toggleSidebar={toggleSidebar}  />

        <div className={`p-7 text-2xl font-semibold flex-1 h-screen ${location.pathname === '/not-found' ? 'hidden' : ''} ${open ? 'ml-[50vh]' : 'ml-[10vh]'}`}>
        
          {/* This is where we actually render ai chatbot and not in routes- purpose is to not to relaod Iframe */}
          <div hidden={loc.pathname !== "/ai-chatbot"}><AiChatbot /></div>
          
          <Routes>
       
            <Route path="/dashboard" element={<ProtectedRoute component={Dashboard} />} />
            <Route path="/calorie-meter" element={<ProtectedRoute component={CalorieMeter} />} />
            {/* {return an empty compoenent as above we are return the ai chatbot componenet this is just for protected routes  */}
            <Route path="/ai-chatbot" element={<ProtectedRoute component={EmptyComponent} />} />
            {/* Health quiz route needs update */}
            {/* <Route path="/health-quiz" element={<HealthQuiz/>}  /> */}
            {/* Full-screen Not Found page without the sidebar */}
            <Route path="/not-found" element={<NotFound />} />
            {/* <Route path="/blog" element={<ProtectedRoute component={Blog} />} /> */}
            {/* <Route path="/calorie-meter" element={<CircBar />} /> */}
            <Route path="/blog" element={<ProtectedRoute component={BlogHome} />} />
            <Route path="/post/:postId" element={<ProtectedRoute component={Single} />} /> 
            <Route path="/write" element={<ProtectedRoute component={Write} />} />
          </Routes>
        </div>

        {/* Full-screen Not Found page
        <div className={`p-7 text-2xl font-semibold flex-1 h-screen bg-amber-400 ${location.pathname === '/not-found' ? '' : 'hidden'}`}>
          <NotFound />
        </div> */}
      </div>
    </>
  );
};

export default Home;
