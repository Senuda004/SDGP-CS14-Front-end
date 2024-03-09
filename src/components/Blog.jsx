import React, { useState } from 'react';
import BlogPost from './BlogPost';
import './blog.css'; // Import the CSS file

const Blog = () => {
  const [blogPosts, setBlogPosts] = useState([       //Array for blog post
    { id: 1, title: 'Lemon puff', content: 'Lemon puffs are delightful treats that offer a burst of citrusy flavor in every bite. These airy, delicate pastries are typically made with a combination of flour, butter, sugar, and fresh lemon zest, giving them a tangy and refreshing taste. While lemon puffs are primarily enjoyed for their delightful taste and light texture, they also offer some nutritional value. They contain carbohydrates from the flour and sugar, providing a quick source of energy. Additionally, lemons are rich in vitamin C, which is essential for immune function, skin health, and collagen production. The lemon zest used in the puff pastry also adds dietary fiber, antioxidants, and essential oils that contribute to overall health and well-being. However, it is important to enjoy lemon puffs in moderation as they can be high in calories and sugar, especially if they are coated with powdered sugar or icing. As with any treat, incorporating them into a balanced diet is key to enjoying their taste while maintaining a healthy lifestyle.', imageUrl: "https://m.media-amazon.com/images/I/41ebA4PUQcL.jpg" },
    { id: 2, title: 'RedBull', content: 'Red Bull is a popular energy drink known for its stimulating effects, often consumed to increase alertness and combat fatigue. A typical can of Red Bull contains carbohydrates from sugars, primarily sucrose and glucose, providing a rapid energy boost. It also includes a blend of B-vitamins, such as niacin (B3), pantothenic acid (B5), vitamin B6, and B12, crucial for energy metabolism. Red Bull contains taurine, an amino acid linked to improved exercise performance and reduced fatigue. However, it is high in sugar and calories, and excess consumption may lead to health issues like weight gain and dental problems. Additionally, its caffeine content varies, with an 8.4 oz (250 ml) can containing about 80 mg, similar to a cup of coffee. While moderate intake can offer a temporary energy boost, it is important to be mindful of consumption and explore healthier alternatives for sustained energy levels.', imageUrl: 'https://objectstorage.ap-mumbai-1.oraclecloud.com/n/softlogicbicloud/b/cdn/o/products/100470--1--1622785510.webp' },
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
