import React from 'react';
import './url-input-section.scss';
import UrlInput from './widgets/url-input/url-input.tsx';

const UrlInputSection: React.FC  = () => {
  return (
    <div className="url-input-section">
      <div className="centered-text">
        Enter the URL of the website below to start asking questions about it in seconds
      </div> 
      <div className="url-input-container">
        <UrlInput 
          placeholder="Enter URL"
        />
      </div> 
    </div>
  );
};

export default UrlInputSection;