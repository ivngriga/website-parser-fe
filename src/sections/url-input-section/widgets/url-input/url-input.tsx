import React, { useState } from 'react';
import './url-input.scss'; // Import the SCSS file
import { SubmitUrl } from '../../server-requests/submit-url';
import UrlInputButton from '../url-input-button/url-input-button';

interface UrlInputProps {
  placeholder?: string;
}

const UrlInput: React.FC<UrlInputProps> = ({ placeholder }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = () => {
    // Call the SubmitUrl function with the inputValue
    SubmitUrl(inputValue);
  };

  return (
    <div className="url-input-container-inner">
      <input
        className={`url-input`} // Use the SCSS class name
        type="text" 
        placeholder={placeholder}
        value={inputValue}
        onChange={handleInputChange}
      />
      <div className="url-input-button-container">
        <UrlInputButton onClick={handleSubmit} />
      </div>
    </div>
  );
};

export default UrlInput;