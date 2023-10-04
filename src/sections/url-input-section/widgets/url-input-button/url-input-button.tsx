import React from 'react';

import './url-input-button.scss';

interface UrlInputButtonProps {
  onClick: () => void;
}

const UrlInputButton: React.FC<UrlInputButtonProps> = ({ onClick }) => {
    
  return ( 
    <svg
        className="url-input-button" 

        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round" 
        onClick={onClick}
    >
        <path d="M5 12h14M12 5l7 7-7 7" /> 
    </svg>
  );
};

export default UrlInputButton;