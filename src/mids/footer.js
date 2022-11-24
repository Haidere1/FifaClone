import '../style/footer.css'
import  first from '../images/first.webp'
import pepsi from '../images/pepsi.webp'
import wanda from '../images/wanda.webp'
import qatar from '../images/qatar.webp'
import hyndai from '../images/hyndai.webp'
import enrgy from '../images/enrgy.webp'
import fifalogo from '../images/fifalogo.png'
import tttt from '../images/tttt.png'
import fb from '../images/fb.png'
import insta from '../images/insta.png'
const Footer = (e) => {
return(
    <div>
        <div className="top">
            <h4>FIFA PARTNERS</h4>
            <div className='images'>
                <img src={first}></img>
                <img src={pepsi}></img>
                <img src={wanda}></img>
                <img src={qatar}></img>
                <img src={hyndai}></img>
                <img src={enrgy}></img>
                
            </div>
        </div>
                <div className='container-fluid'>
                <img src={fifalogo} style={{width:"7vw" ,marginLeft:"30px" ,marginTop:"10px"}}></img>

            <div className='row'>
                <div className='col-2'> 
                <ul>
                    <li>
                        <h2 style={{color:"black",paddingTop:"20px"}}>Explore</h2>
                    </li>
                    <li>
                    Competitions
                    </li>
                    <li>
                     About FIFA   
                    </li>
                    <li>
                     Womens Football   
                    </li>
                    <li>
                     Social Impact     
                    </li>
                    <li>
                     Football Development   
                    </li>
                    <li>
                     Technical   
                    </li>
                    <li>
                     Legal & Compilance   
                    </li>
                    <li>
                     FIFA/Coca-Cola World Ranking   
                    </li>
                </ul>
                
                <ul className='icons'>
                    <li><img src={fb}/></li>
                    <li><img src={insta}/></li>
                    <li><img src={tttt}/></li>
                </ul>
                
 
                    </div>

                    <div className='col-6'>
                    <ul>
                    <li>
                        <h2 style={{color:"black",paddingTop:"20px"}}>ALSO VISIT</h2>
                    </li>
                    <li>
                    All Stories & Topics
                    </li>
                    <li>
                     Official Documents   
                    </li>
                    <li>
                     Jobs and Careers   
                    </li>
                    <li>
                     Contact FIFA    
                    </li>
                 
                </ul>
                    </div>
            </div>

        </div>
    </div>

);     
};
export default Footer;