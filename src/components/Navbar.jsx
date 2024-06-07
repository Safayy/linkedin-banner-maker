import '../styles/Navbar.css';
import {useNavigate} from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();
    return ( 
        <>
        <ul>
            <li><a onClick={()=>navigate('/')}>LinkedIn Banner Maker</a></li>
            <li><a onClick={()=>navigate('/create')}>Create</a></li>
            <li><a href="http://safaa.dev" target="_blank">Learn more about me</a></li>
        </ul>
        </>
     );
}

export default Navbar;