import React from 'react'
import './TextBlock.css';

 function TextBlock({children}) {
  return (
    <p className='textBlock'>
        {children}
    </p>
    
  )
}

export default TextBlock;
