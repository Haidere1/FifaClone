import '../style/submenu.css'
import {Link} from 'react-router-dom'
const Submenu = (e) => {
     return(
        <div className='inner'>
            <Link style={{color:"black"}} to={{ pathname: "/privacy" }}><h4>Privacy</h4></Link>
            <Link style={{color:"black"}} to={{ pathname: "/terms" }}><h4>Terms</h4></Link>
            
    </div>
     );
};
export default Submenu;