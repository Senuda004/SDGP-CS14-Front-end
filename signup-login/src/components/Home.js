import React, {useState} from 'react';
import './Home.css';

const Home = () => {
    const [open, setOpen] = useState(true);

    return (
        <>
            <div className='flex'>
                <div className={`${open ? "w-72" : "w-20"} h-screen custom-shadow-home relative`}>
                    <img src="https://www.svgrepo.com/show/494008/back.svg" alt="Logo" className='absolute cursor-pointer
                    right-[-14px] top-8 w-8 p-1 border-2 border-black rounded-full bg-white'/>
                </div>
                <div className='p-7 text-2xl font-semibold flex-1 h-screen'>
                    <h1>Home Page</h1>
                </div>
            </div>
        </>
    );
};

export default Home;