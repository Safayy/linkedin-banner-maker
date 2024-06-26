import { useParams } from 'react-router-dom';
import Draggable from 'react-draggable';
import html2canvas from 'html2canvas';
import '../styles/Design.css'

const Design = () => {
    const {name, job, website, phone, email} = useParams();
    const exportImage = () => {
        html2canvas(document.querySelector(".show"), {
            windowWidth: 1584,
            windowHeight: 396,
            scale: 1584/396
        }).then(function(canvas) {
            var link = document.createElement('a');
            link.download = 'banner.png';
            link.href = canvas.toDataURL()
            link.click();
        });
        console.log("RUN")
    }

    return ( 
        <>
        <h1>Customize your Banner</h1>
        <div className='profile'>
            <div id='capture' className='banner show'>
                <Draggable className="draggable" bounds="parent">
                    <span id='name' className='bannerItem item show'>{name}</span>
                </Draggable>
                <Draggable className="draggable" bounds="parent">
                    <span id='job' className='bannerItem item show'>{job}</span>
                </Draggable>
                <Draggable className="draggable" bounds="parent">
                    <span id='website' className='bannerItem item show'>{website}</span>
                </Draggable>
                <Draggable className="draggable" bounds="parent">
                    <span id='phone' className='bannerItem item show'>{phone}</span>
                </Draggable>
                <Draggable className="draggable" bounds="parent">
                    <span id='email' className='bannerItem item show'>{email}</span>
                </Draggable>
            </div>
            <div className="profile-photo">
                <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="" />
            </div>
        </div>
        <div className="toolbar">
       <form className='line'>
        <label>Text Color</label>
        <input type='color'/>

        <label>Fonts</label>
        <select id="fonts" name="fonts">
            <option value="timesnewroman">Times New Roman</option>
            <option value="poppy">Poppy</option>
        </select>

        <label>Background Images</label>
        <div className='flexbox'>
            <div className='labelimagebox'>
                <span>Name</span>
                <img src="https://marketplace.canva.com/EAENvp21inc/1/0/1600w/canva-simple-work-linkedin-banner-qt_TMRJF4m0.jpg" alt="" />
            </div>
            <div className='labelimagebox'>
                <img src="https://marketplace.canva.com/EAENvp21inc/1/0/1600w/canva-simple-work-linkedin-banner-qt_TMRJF4m0.jpg" alt="" />
                <span>Name</span>
            </div>
        </div>

        <label>Layouts</label>
        <div className='flexbox'>
            <div className='labelimagebox'>
                <span>Name</span>
                <img src="https://marketplace.canva.com/EAENvp21inc/1/0/1600w/canva-simple-work-linkedin-banner-qt_TMRJF4m0.jpg" alt="" />
            </div>
            <div className='labelimagebox'>
                <img src="https://marketplace.canva.com/EAENvp21inc/1/0/1600w/canva-simple-work-linkedin-banner-qt_TMRJF4m0.jpg" alt="" />
                <span>Name</span>
            </div>
        </div>

        </form>
        <button className='button' onClick={exportImage}>Extract Image</button>
        </div>
        </>
     );
}
 
export default Design;