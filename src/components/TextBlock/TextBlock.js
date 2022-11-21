import React from 'react'
import './TextBlock.css';

 function TextBlock({children}) {
  return (
    <span className='textBlock'>
        {children}
    </span>
    
  )
}

export default TextBlock;
