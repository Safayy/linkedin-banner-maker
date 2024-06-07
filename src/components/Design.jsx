import { useParams } from 'react-router-dom';
import Draggable from 'react-draggable';
import '../styles/Design.css'

const Design = () => {
    const {name, job, website, phone, email} = useParams();

    return ( 
        <div>
            <h1>Customize your Banner</h1>
            <div className="banner">
                <Draggable className="x" bounds="parent">
                    <h1 className='draggable'>{name}</h1>
                </Draggable>
            </div>
            <div className="toolbar">
                <h2>Customization Toolbar</h2>
            </div>
        </div>
     );
}
 
export default Design;