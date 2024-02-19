import React, {useState} from 'react';
import './Home.css';

const Home = () => {
    const [open, setOpen] = useState(true);

    const Menus = [
        { title: "Dashboard", src: "https://i.ibb.co/n7FkLbR/home.png"},
        { title: "Calorie Meter", src: "https://i.ibb.co/7z639nV/calories-1.png", gap: true},
        { title: "AI Chatbot", src: "https://i.ibb.co/L8CVzd2/bot-1.png", gap: true},
    ];

    return (
        <>
            <div className='flex'>
                <div className={`${open ? "w-72" : "w-20"} duration-300 h-screen custom-shadow-home relative p-5`}>
                    <img src="https://www.svgrepo.com/show/494008/back.svg" alt="Icon" className={`absolute cursor-pointer
                    right-[-14px] top-8 w-8 p-1 border-2 border-black rounded-full bg-white ${!open && "rotate-180"}`} onClick={()=>setOpen(!open)}/>

                    <div className='flex gap-x-4 items-center'>
                        <img src="https://i.ibb.co/HGZkXHv/Nutri-mate-logo.png" alt="Logo" className={`cursor-pointer duration-500 w-28`}/>
                        <h1 className={`ttext-black origin-left font-medium text-xl duration-300 ${!open && "scale-0"}`}>Nutri Mate</h1>
                    </div>

                    <ul className="pt-6">
                        {Menus.map((Menu, index) => (
                            <li
                            key={index}
                            className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-500 text-sm font-semibold items-center gap-x-4 border-2 border-amber-400
                            ${Menu.gap ? "mt-9" : "mt-2"} ${
                                index === 0 && "bg-light-white"
                            } `}
                            >
                            <img src={Menu.src} width={23}/>
                            <span className={`${!open && "hidden"} origin-left duration-200 pl-5`}>
                                {Menu.title}
                            </span>
                            </li>
                        ))}
                    </ul>
                 
                </div>
                <div className='p-7 text-2xl font-semibold flex-1 h-screen'>
                    <h1>Home Page</h1>
                </div>           
               
            </div>
        </>
    );
};

export default Home;