import React from 'react';
import '../../stylesheets/components/shared/Button.css';

export default function button({
  id = null,
  name = null,
  className = null,
  type = null,
  children = [],
  onClick = () => {},
}) {
  return(
    <button 
      id={id} 
      type={type}
      name={name}
      className={className}
      onClick={onClick}
    >
      {children}
    </button>
  );
}