import './mainpage.css'
import sample3 from './video/sample3.mp4'
import { Link } from 'react-router-dom';


const Main = (e) => {
    
    return(
        <div>
        <video  className='vid' source src={sample3} autoPlay loop muted playsInline/>
 
   <div className="TMENU">
       <ul>
           <li><link to="/login.js"> Login</link></li>
           <li><link to="/signupnew.js">Signup</link> </li>

       </ul>
   </div>
   <div className="btn1">
       <h1>WELCOME</h1>
       <h2 className="EXPLORE"><a href="explorepage.html" target="_blank" className="EXPLORE"> Explore</a></h2>
       
   </div>
   </div>
    )
};
export default Main;