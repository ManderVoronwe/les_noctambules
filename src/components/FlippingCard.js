import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const FlippingCard = ({ frontText, backText, cardWidth, cardHeight, frontTitle = '', backTitle = '', frontImg = '', backImg = '' }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const cardStyle = {
    perspective: '1000px',
    transition: 'transform 0.6s',
    transformStyle: 'preserve-3d',
    position: 'relative',
    height: cardHeight,
    width: cardWidth,
    transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)', // Adjusted for flip effect
  };

  const cardInnerStyle = {
    transformStyle: 'preserve-3d',
    height: '100%',
  };

  const cardFrontBackStyle = {
    backgroundColor: '#1a4e09',
    color: 'rgb(196, 111, 71)',
    backfaceVisibility: 'hidden',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  };

  const cardBackStyle = {
    transform: 'rotateY(180deg)',
    alignItems: 'center',
    justifyContent: 'center',
  };

  return (
    <Card
      style={cardStyle}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div style={cardInnerStyle}>
        <div style={cardFrontBackStyle}>
          <Card.Img variant="top" src={frontImg} />
          <Card.Title><h3>{frontTitle}</h3></Card.Title>
          <Card.Body>{frontText}</Card.Body>
        </div>

        <div style={{ ...cardFrontBackStyle, ...cardBackStyle }}>
          <Card.Img variant="top" src={backImg} />
          <Card.Title><h3>{backTitle}</h3></Card.Title>
          <Card.Body>{backText}</Card.Body>
        </div>
      </div>
    </Card>
  );
};

export default FlippingCard;