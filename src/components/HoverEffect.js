

import React, { useState } from 'react';

function HoverEffect(props) {
  const { text, source } = props;
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const boxStyle = {
    width: '200px',
    height: '200px',
    margin:0,
    borderRadius: '10px', margin:"30px",
    transition: 'background-color 0.3s ease',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    fontWeight: 'bold',
    cursor: 'pointer',
    opacity: isHovered ? 0.5 : 1, // Modifier l'opacité en fonction du survol
  };

  return (
    
    <div
      style={boxStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {isHovered ? source : text}
    </div>
  );
}

export default HoverEffect;
