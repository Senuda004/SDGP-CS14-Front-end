import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const location = useLocation();

  const Menus = [
    { title: "Dashboard", src: "https://i.ibb.co/n7FkLbR/home.png" },
    { title: "Calorie Meter", src: "https://i.ibb.co/7z639nV/calories-1.png", gap: true },
    { title: "AI Chatbot", src: "https://i.ibb.co/L8CVzd2/bot-1.png", gap: true },
  ];

  const handleLogOut = () => {
    // Clear session or authentication information
    // clear tokens from local storage
    localStorage.removeItem('token');

    // Redirect to the login page
    window.location.href = '/';
  };

  return (
    <div className={`${isOpen ? "w-72" : "w-20"} h-[220vh] duration-300  custom-shadow-home p-5 relative`}>
      <img src="https://www.svgrepo.com/show/494008/back.svg" alt="Icon" className={`absolute cursor-pointer right-[-14px] top-8 w-8 p-1 border-2 border-black rounded-full bg-white ${!isOpen && "rotate-180"}`} onClick={toggleSidebar} />

      <div className='flex gap-x-4 items-center'>
        <img src="https://i.ibb.co/HGZkXHv/Nutri-mate-logo.png" alt="Logo" className={`cursor-pointer duration-500 w-28`} />
        <h1 className={`ttext-black origin-left font-medium text-xl duration-300 ${!isOpen && "scale-0"}`}>Nutri Mate</h1>
      </div>

      <ul className="pt-6">
        <Link to="/dashboard">
            <li className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-500 text-sm font-semibold items-center gap-x-4 border-2 border-amber-400 ${Menus[0].gap ? "mt-9" : "mt-2"} ${0 === 0 && "bg-light-white"} ${location.pathname === '/dashboard' ? "bg-amber-100" : ""}`}>
                <img src={Menus[0].src} width={23} />
                <span className={`${!isOpen && "hidden"} origin-left duration-200 pl-5`}>
                    {Menus[0].title}
                </span>
            </li>
        </Link>
        
        <Link to="/calorie-meter">
            <li className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-500 text-sm font-semibold items-center gap-x-4 border-2 border-amber-400 ${Menus[1].gap ? "mt-9" : "mt-2"} ${1 === 0 && "bg-light-white"} ${location.pathname === '/calorie-meter' ? "bg-amber-100" : ""}`}>
                <img src={Menus[1].src} width={23} />
                <span className={`${!isOpen && "hidden"} origin-left duration-200 pl-5`}>
                    {Menus[1].title}
                </span>
            </li>
        </Link>
        
        <Link to="/ai-chatbot">
            <li className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-500 text-sm font-semibold items-center gap-x-4 border-2 border-amber-400 ${Menus[2].gap ? "mt-9" : "mt-2"} ${2 === 0 && "bg-light-white"} ${location.pathname === '/ai-chatbot' ? "bg-amber-100" : ""}`}>
                <img src={Menus[2].src} width={23} />
                <span className={`${!isOpen && "hidden"} origin-left duration-200 pl-5`}>
                    {Menus[2].title}
                </span>
            </li>
        </Link>
        
      </ul>

      <div className=' pt-52'>
        <button className="flex bg-amber-400 text-white w-full rounded-md p-2 mt-10" onClick={handleLogOut}>
          <img src="https://i.ibb.co/9yn08Ny/logout-1.png" className={`w-6`} />
          <span className={`${!isOpen && "hidden"} origin-left pl-16`}>Log Out</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
