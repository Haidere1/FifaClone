import { useState } from "react";
import { Link } from "react-router-dom";
import vodd from './video/vodd.mp4'
import './login.css'

function Lab2() {
    const [username,setUsername]=useState("");
    const [password,setPassword]=useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const handleChange = (e) => {
        const newUsername = e.currentTarget.value;
        setUsername(newUsername);
        
    }

    
    const handleChange2 = (e) => {
        const newPassword = e.currentTarget.value;
        setPassword(newPassword);
       
    }
    return ( 
        <div>
            <form onSubmit={handleSubmit}>
                      
    <div className="menu">
       
       <video src={vodd} autoPlay muted loop playsInline className='img'></video>
       
   </div>
   <div className="login">
       <h1>Welcome To The Infinity Realm</h1>
   </div>
   <div className="input">
       <table>
           <tr><td>
       <label><b> USERNAME</b></label>
   </td>
       <td>
       <input type="text" name="" id="" value={username} onChange={handleChange}/>
       
   </td>
   </tr>

       
   <br/>
   <tr>
    <td style={{marginLeft:"50%"}}>
   <label><b> PASSWORD </b></label>
   </td>
   <td>
       <input type="password" name="" id="" value={password} onChange={handleChange2}/>
       
   </td>
   </tr>
   </table>
   <button  className="btn1"> <Link to='/check'>Login</Link></button>
   <p style={{fontSize: 30, marginTop:"4vh"}}><b> Dont have an account?</b></p>
    <button  className="btn1"> <Link to='/signup'> Signup </Link></button>
    <p style={{marginTop:"20px"}}>
   {username}
   </p>
   <p style={{marginTop:"20px"}}>
   {password}
   </p>
   
   
   </div>
   
            </form>
        
        </div>
     );
}

export default Lab2;
<div>

</div>