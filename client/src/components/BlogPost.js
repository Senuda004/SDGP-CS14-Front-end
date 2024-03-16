import React, { useState } from 'react';

const BlogPost = ({ post }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  return (
    <div className="blog-post" onClick={toggleDescription}>
      {showFullDescription ? (
        <div>
          <h2>{post.title}</h2>
          <img src={post.imageUrl} alt={post.title} />
          <p>{post.content}</p>
        </div>
      ) : (
        <div>
          <h2>{post.title}</h2>
          <img src={post.imageUrl} alt={post.title} />
          <p>{post.content.substring(0, 195)}..</p>
          <p><em>Click to see full description</em></p>
        </div>
      )}
    </div>
  );
};

export default BlogPost;
