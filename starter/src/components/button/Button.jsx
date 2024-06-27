import React from 'react';
import './Button.css'

const Button = ({ text, backgroundColor, textColor, onClick }) => {
  // const buttonStyle = {
  //   backgroundColor: backgroundColor || '#007bff',
  //   color: textColor || '#ffffff',
  //   padding: '10px 20px',
  //   border: 'none',
  //   borderRadius: '5px',
  //   cursor: 'pointer',
  //   fontSize: '16px',
  //   fontWeight: 'bold',
  //   outline: 'none',
  // };

  // btn

  return (
    <div className='buttons'>
    <button  onClick={onClick} className='btn-dark btn'>
      {text}
    </button>
     <button  onClick={onClick} className='btn'>
     {text}
   </button>
   </div>
  );
  
};

export default Button;
