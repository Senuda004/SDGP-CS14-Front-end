// GetTips.js

import React from 'react';
import './getTips.css'; // Corrected import statement

const GetTips = ({ tipsData }) => {
  return (
    <div className='main-contr'>
      <div className="tips-container">
        {tipsData.map(tip => (
          <div key={tip.id} className="tip-card">
            
            <div className="tip-topic">{tip.topic}</div>
            <div className="tip-description">{tip.description}</div>
          </div>
        ))}
      </div>
    </div>  
  );
}

export default GetTips;
