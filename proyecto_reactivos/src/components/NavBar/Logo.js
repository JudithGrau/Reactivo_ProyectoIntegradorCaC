import { Link } from 'react-router-dom';
import logo from './../../assets/img/logo.png';

export const Logo = ({ clases }) =>{
    
    return(
        <Link to='/'>
            <img 
                src={ logo }
                alt={ logo }
                className={ clases } 
            />
        </Link>
    )
}