import '../styles/Home.css';
import {useNavigate} from 'react-router-dom';
const Home = () => {
    const navigate = useNavigate();
    return ( 
        <div className="header center">
        <h1>LinkedIn Banner Maker</h1>
        <p>Quickly create a customized linked in banner. Just fill in some simple questions first.</p>
        <button className="button" onClick={() => navigate('/create')}>Create Yours Now!</button>
        </div>
 );
}
 
export default Home;