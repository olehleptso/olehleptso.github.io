import './Button.css';
import {Link} from 'react-router-dom';

function Button({back, children}) {
  return (
    back ? 
    <button className='button return'>
        <Link to='/'>{children}</Link>
    </button> 
    :
    <button className='button standart'>
        {children}
    </button> 
  )
}

export default Button;