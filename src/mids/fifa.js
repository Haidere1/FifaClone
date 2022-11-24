import fifalogo from '../images/fifalogo.png'
import  '../style/mids.css'
import searchh from '../images/searchh.png'
import { Link } from 'react-router-dom';
function Fifa() {
    return ( 
     <div style={{paddingBottom:"20px"}}>

        <div className='menu' style={{borderBottom:"1px solid grey"}}>
            <img className="logo" src={fifalogo}></img>
            <ul className='ul1'>
                <li>
                    <img className='searchlogo' src={searchh}></img>
                </li>
                <li>Store</li>
                <li>Tickets</li>
                <li>Login</li>
            </ul>

        </div>
        <div className='menu'>
            <ul className='ul2' >
                <b>
                <li>
                    TOURNAMENTS ON FIFA+
                </li>
                <li>ABOUT FIFA</li>
                <li>WOMEN'S FOOTBALL</li>
                <li>SOCIAL IMPACT</li>
                <li>FOOTBALL DEVELOPMENT</li>
                <li>TECHNICAL</li>
                <li> LEGAL</li>

                
                
    


                
                {/* <div className='inner'>
                    <ul>
                        <li>
                            Mens Ranking
                        </li>
                        <li>
                            Wommens Ranking
                        </li>
                        <li>
                            News
                        </li>
                        <li>
                            Ranking Proicedure Mens
                        </li>
                        <li>
                            Ranking Proicedure WoMens
                        </li>
                    </ul>
                </div> */}
                
                </b>
            </ul>
            
            

        </div>
     </div>   
        );
}

export default Fifa;