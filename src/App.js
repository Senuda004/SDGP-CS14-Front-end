import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Terms from './components/pages/Terms.jsx';
import QAPage from './components/pages/QAPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/terms" element={<Terms />} />
        <Route path="/q-and-a" element={<QAPage />} />
        {/* Other routes */}
      </Routes>
    </Router>
    
  );
};


export default App;
