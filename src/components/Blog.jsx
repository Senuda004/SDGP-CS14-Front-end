import React, { useState } from 'react';
import BlogPost from './BlogPost';
import './blog.css'; // Import the CSS file

const Blog = () => {
  const [blogPosts, setBlogPosts] = useState([       //Array for blog post
    { id: 1, title: 'Lemon puff', content: 'This is the content of the first blog post.', imageUrl: "https://m.media-amazon.com/images/I/41ebA4PUQcL.jpg" },
    { id: 2, title: 'Second Blog Post', content: 'This is the content of the second blog post.', imageUrl: 'https://example.com/image2.jpg' },
    { id: 3, title: 'Third Blog Post', content: 'This is the content of the third blog post.', imageUrl: 'https://example.com/image3.jpg' },
    { id: 4, title: 'Fourth Blog Post', content: 'This is the content of the fourth blog post.', imageUrl: 'https://example.com/image4.jpg' },
    { id: 5, title: 'Fifth Blog Post', content: 'This is the content of the fifth blog post.', imageUrl: 'https://example.com/image5.jpg' },
  ]);

  const [newPostTitle, setNewPostTitle] = useState('');
  const [newPostContent, setNewPostContent] = useState('');
  const [newPostImageUrl, setNewPostImageUrl] = useState('');
  const [showAddTab, setShowAddTab] = useState(false);

  const handleAddPost = () => {
    if (newPostTitle && newPostContent && newPostImageUrl) {
      const newPost = {
        id: Date.now(),
        title: newPostTitle,
        content: newPostContent,
        imageUrl: newPostImageUrl
      };
      setBlogPosts([...blogPosts, newPost]);
      setNewPostTitle('');
      setNewPostContent('');
      setNewPostImageUrl('');
    } else {
      alert('Please fill in all fields.');
    }
  };

  return (
    <div className="blog-page">
      <div className='blogHead'>
        <span>Blog Page</span>
      </div>
      <div className="tabs">          
        <button onClick={() => setShowAddTab(false)}>Existing Posts</button>
        <button onClick={() => setShowAddTab(true)}>Add Post</button>
      </div>
      <div className="tab-content">
        {showAddTab ? (
          <div className="add-post-form">
            <input
              type="text"
              placeholder="Enter title"
              value={newPostTitle}
              onChange={e => setNewPostTitle(e.target.value)}
            />
            <input
              type="text"
              placeholder="Enter content"
              value={newPostContent}
              onChange={e => setNewPostContent(e.target.value)}
            />
            <input
              type="text"
              placeholder="Enter image URL"
              value={newPostImageUrl}
              onChange={e => setNewPostImageUrl(e.target.value)}
            />
            <button onClick={handleAddPost}>Add Post</button>
          </div>
        ) : (
          <div className="blog-post-list">
            {blogPosts.map(post => (
              <BlogPost key={post.id} post={post} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog;
