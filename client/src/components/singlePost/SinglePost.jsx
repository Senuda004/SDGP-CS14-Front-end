import React from 'react';
import { useParams } from 'react-router-dom';
import './singlepost.css';

export default function SinglePost() {
  // Access the postId parameter from the URL
  const { postId } = useParams();

  // Depending on the postId, render different content
  let postContent;
  if (postId === '1') {
    // Content for post with id 1
    postContent = {
      title: <h1>Post Title 1</h1>,
      author: 'Author 1',
      date: '1 day ago',
      description: (
        <div>
          <p>Description for post 1...</p>
          <p>More content for post 1...</p>
        </div>
      ),
      imageUrl: "https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
    };
  } else if (postId === '2') {
    // Content for post with id 2
    postContent = {
      title: <h1>Post Title 2</h1>,
      author: 'Author 2',
      date: '2 days ago',
      description: (
        <div>
          <p>Description for post 2...</p>
          <p>More content for post 2...</p>
        </div>
      ),
      imageUrl: "https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" // Replace with the actual URL for post 2
    };
  } else if (postId === '3') {
    // Content for post with id 2
    postContent = {
      title: <h1>Post Title 3</h1>,
      author: 'Author 2',
      date: '2 days ago',
      description: (
        <div>
          <p>Description for post 2...</p>
          <p>More content for post 2...</p>
        </div>
      ),
      imageUrl: "https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" // Replace with the actual URL for post 2
    };
  } else if (postId === '4') {
    // Content for post with id 2
    postContent = {
      title: <h1>Post Title 4</h1>,
      author: 'Author 2',
      date: '2 days ago',
      description: (
        <div>
          <p>Description for post 2...</p>
          <p>More content for post 2...</p>
        </div>
      ),
      imageUrl: "https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" // Replace with the actual URL for post 2
    };
  } else if (postId === '5') {
    // Content for post with id 2
    postContent = {
      title: <h1>Post Title 4</h1>,
      author: 'Author 2',
      date: '2 days ago',
      description: (
        <div>
          <p>Description for post 2...</p>
          <p>More content for post 2...</p>
        </div>
      ),
      imageUrl: "https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" // Replace with the actual URL for post 2
    };
  } 
  

  return (
    <div className='singlePost'>
      <div className='singlePostWrapper'>
        {/* Render the content based on postId */}
        <img className='singlePostImg' src={postContent.imageUrl} alt='Post Image' />
        {postContent.title}
        <div className='singlePostInfo'>
          <span>
            Author: <b className='singlePostAuthor'>{postContent.author}</b>
          </span>
          <span>{postContent.date}</span>
        </div>
        <div className="singlePostDesc">{postContent.description}</div>
      </div>
    </div>
  );
}
