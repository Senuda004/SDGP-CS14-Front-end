import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Posts from '../../components/posts/Posts';
import Header from '../../components/header/Header';
import Search from '../../components/search/Search'; // Import the search component
import axios from 'axios';

export default function BlogHome() {
  const location = useLocation();
  console.log(location);

  const [posts, setPosts] = useState([]);
  const [searchResults, setSearchResults] = useState([]); // State for search results

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get('/posts');
        setPosts(res.data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };
    fetchPosts();
  }, []);

  const handleSearch = (searchTerm) => {
    const results = posts.filter((post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.description.toLowerCase().includes (searchTerm.toLowerCase())
    );
    setSearchResults(results);
  };

  return (
    <div>
      <Header />
      <div className='home'>
        <Search handleSearch={handleSearch} /> {/* Render the search component */}
        <Posts posts={searchResults.length > 0 ? searchResults : posts} /> {/* Render posts or search results */}
      </div>
    </div>
  );
}
