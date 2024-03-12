import React from 'react'
import { useLocation } from 'react-router-dom'; // Assuming you're using useLocation in Homepage.jsx
import Posts from "../../components/posts/Posts"; 
import Header from "../../components/header/Header";

export default function BlogHome  ()  {
    const location =useLocation();
    console.log(location);

  return (
    <div>
        <Header/>
    <div className='home'>
        <Posts/> {/*Rendering the posts component*/}
        </div>  
    </div>
  )
}

