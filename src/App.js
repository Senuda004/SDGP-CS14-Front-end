import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Blog from './components/pages/Blog.jsx';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </Router>
    
  );
};


export default App;
