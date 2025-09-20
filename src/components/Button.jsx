import React from 'react';

const Button = ({ onClick, label }) => {
  return (
    <button className="load-more" onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;