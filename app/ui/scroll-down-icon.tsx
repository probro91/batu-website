import React from 'react';

const ScrollIndicator = () => {
  return (
    <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 mb-8 animate-fade-in">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8 animate-bounce"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 14l-7 7m0 0l-7-7m7 7V3"
        />
      </svg>
    </div>
  );
};

export default ScrollIndicator;
