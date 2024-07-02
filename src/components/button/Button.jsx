import React from 'react';
import './Button.css'

const Button = ({ text, onClick }) => {


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
