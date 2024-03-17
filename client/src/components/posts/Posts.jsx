import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Post from '../post/Post'
import './posts.css'

export default function Posts() {
  
  //State to track the selected category, defaulting to 'All'
    const[selectedCategory, setSelectedCategory]=useState('All');


    //Array of posts data
    const postsData=[
           {
            id:1,
            img:"https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
            title:"Red Bull",
            category: "Drinks",
            date:"1 hour ago",
            description:"Lorem ipsum dolor sit amet, "

        },
        {
            id:2,
            img:"https://i.ibb.co/BBvjL55/steve-johnson.jpg",
            title:"Red Bull",
            category: "Biscuits",
            date:"2 hour ago",
            description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda officia architecto deserunt deleniti? Labore ipsum aspernatur magnam fugiat, reprehenderit praesentium blanditiis quos cupiditate ratione atque, exercitationem quibusdam, reiciendis odio laboriosam?"

        },
        {
            id:3,
            img:"https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
            title:"Red Bull",
            category: "Drinks",
            date:"2 hour ago",
            description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda officia architecto deserunt deleniti? Labore ipsum aspernatur magnam fugiat, reprehenderit praesentium blanditiis quos cupiditate ratione atque, exercitationem quibusdam, reiciendis odio laboriosam?"

        },
        {
            id:4,
            img:"https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
            title:"Red Bull",
            category: "Drinks",
            date:"1 hour ago",
            description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda officia architecto deserunt deleniti? Labore ipsum aspernatur magnam fugiat, reprehenderit praesentium blanditiis quos cupiditate ratione atque, exercitationem quibusdam, reiciendis odio laboriosam?"

        },
        {
            id:5,
            img:"https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
            title:"Red Bull",
            category: "Biscuits",
            date:"2 days ago",
            description:"Lorem ipsum dolor sit amet, "

        },
        {
          id:6,
          img:"https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
          title:"Red Bull",
          category: "Drinks",
          date:"2 days ago",
          description:"Lorem ipsum dolor sit amet,"

      },
      {
            id:7,
            img:"https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
            title:"Red Bull",
            category: "Biscuits",
            date:"2 days ago",
            description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda officia architecto deserunt deleniti? Labore ipsum aspernatur magnam fugiat, reprehenderit praesentium blanditiis quos cupiditate ratione atque, exercitationem quibusdam, reiciendis odio laboriosam?"

        },
        {
          id:8,
          img:"https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
          title:"Red Bull",
          category: "Biscuits",
          date:"2 days ago",
          description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda officia architecto deserunt deleniti? Labore ipsum aspernatur magnam fugiat, reprehenderit praesentium blanditiis quos cupiditate ratione atque, exercitationem quibusdam, reiciendis odio laboriosam?"

      },
      {
        id:9,
        img:"https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        title:"Red Bull",
        category: "Biscuits",
        date:"2 days ago",
        description:"Lorem ipsum dolor sit amet,"

    },
    {
      id:10,
      img:"https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      title:"Red Bull",
      category: "Biscuits",
      date:"2 days ago",
      description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda officia architecto deserunt deleniti? Labore ipsum aspernatur magnam fugiat, reprehenderit praesentium blanditiis quos cupiditate ratione atque, exercitationem quibusdam, reiciendis odio laboriosam?"

  },
  {
    id:11,
    img:"https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    title:"Red Bull",
    category: "Biscuits",
    date:"2 days ago",
    description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda officia architecto deserunt deleniti? Labore ipsum aspernatur magnam fugiat, reprehenderit praesentium blanditiis quos cupiditate ratione atque, exercitationem quibusdam, reiciendis odio laboriosam?"

},
{
  id:12,
  img:"https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  title:"Red Bull",
  category: "Biscuits",
  date:"2 days ago",
  description:" reiciendis odio laboriosam?"

},
{
  id:13,
  img:"https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  title:"Red Bull",
  category: "Biscuits",
  date:"2 days ago",
  description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda officia architecto deserunt deleniti? Labore ipsum aspernatur magnam fugiat, reprehenderit praesentium blanditiis quos cupiditate ratione atque, exercitationem quibusdam, reiciendis odio laboriosam?"

},
{
  id:14,
  img:"https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  title:"Red Bull",
  category: "Biscuits",
  date:"2 days ago",
  description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda officia architecto deserunt deleniti? Labore ipsum aspernatur magnam fugiat, reprehenderit praesentium blanditiis quos cupiditate ratione atque, exercitationem quibusdam, reiciendis odio laboriosam?"

}
    ];

    const filteredPosts= selectedCategory=='All' ? postsData : postsData.filter(post => post.category === selectedCategory);

    return(
        <div className="posts">
  
      {/* Buttons to filter posts by category */}
      <div className='categoryButtons'>
        <button onClick={() => setSelectedCategory('All')}>All</button>
        <button onClick={() => setSelectedCategory('Biscuits')}>Biscuits</button>
        <button onClick={() => setSelectedCategory('Drinks')}>Drinks</button>
        <Link to="/write">
          <button className="addPostButton">Add Post</button>
        </Link> 
      </div>
      {/* Render posts based on the selected category */}
      {filteredPosts.map(post => (
        <Post
        key={post.id}
        id={post.id} // Pass the id property
        img={post.img}
        title={post.title}
        category={post.category}
        date={post.date}
        description={post.description}
        
      />
      
      ))}
      </div>

  );
}
