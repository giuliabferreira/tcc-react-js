import React, { useState } from 'react';

const InfoBar = ({ onInfoChange }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    onInfoChange(e.target.value); // Atualiza a informação no componente pai
  };

  return (
    <div></div>
  );
};

export default InfoBar;