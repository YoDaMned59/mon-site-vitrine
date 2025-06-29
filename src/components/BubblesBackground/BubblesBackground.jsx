import React from 'react';
import './BubblesBackground.scss';

const NUM_BUBBLES = 18;

const BubblesBackground = () => {
  return (
    <div className="bubbles-bg" aria-hidden="true">
      {Array.from({ length: NUM_BUBBLES }).map((_, i) => (
        <div key={i} className={`bubble bubble--${(i % 6) + 1}`}></div>
      ))}
    </div>
  );
};

export default BubblesBackground; 