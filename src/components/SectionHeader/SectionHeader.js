import React from 'react'
import './SectionHeader.css';

function SectionHeader({title, underline, children}) {
  return (
    <div className={`sectionHeader ${underline && 'underline'}`}>
        <div className='flex'>
            <h2>{title}</h2>
        </div>
        {children}
    </div>
    
  )
}


export default SectionHeader;