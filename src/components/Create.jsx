import '../styles/Create.css';
import {useState} from 'react';
import { useNavigate } from 'react-router-dom';

const Create = () => {
    const [name, setName] = useState('')
    const [job, setJob] = useState('')
    const [website, setWebsite] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        /* TODO Error checking, Char limits by truncating */
        navigate(`/create/${name}/${phone}/${email}/${job}/${website}`)
    }

    return (
        <>
        <span>Part 1/2</span>
        <h1>Who Am I</h1> 
        <p>Just answer a few questions first, before you get your customized LinkedIn Banner.</p>
        <form onSubmit={handleSubmit}>
            <label>Full Name</label>
            <input value={name} onChange={(e)=>setName(e.target.value)}/>

            <label>Job Name</label>
            <input value={job} onChange={(e)=>setJob(e.target.value)}/>

            <label>Website (If any)</label>
            <input value={website} onChange={(e)=>setWebsite(e.target.value)}/>

            <label>Phone Number</label>
            <input value={phone} onChange={(e)=>setPhone(e.target.value)}/>

            <label>Email Address</label> {/* TODO Add checking */}
            <input value={email} onChange={(e)=>setEmail(e.target.value)}/>

            <button type='submit'>Submit</button>
        </form>
        </>
     );
}
 
export default Create;