import React from 'react';
import image404 from './404 error page.svg';

const NotFound = () => {
  return (
    <div className="flex items-center justify-center flex-col h-screen">
      <img src={image404} alt="404 not found" className=' w-[100vh]'/>
      <div className="text-black text-3xl font-bold">
        Page Not Found
      </div>
    </div>
  );
};

export default NotFound;
