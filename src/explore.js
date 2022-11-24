import { Link } from "react-router-dom";

import './explore.css'
const Explore = () => {
    return (
          
        <div>
    <div className='topframe'>
        <div className="logo">
            <image className='logoimg' src="site.png" alt="no image"/>
        </div>
        <ul className='l1'>
            <li>Men</li>
            <li style={{paddingLeft: "30px"}}>Women</li>
            <li style={{paddingLeft: "30px"}}>Children</li>
        </ul>
        <ul className="l2">
            <li>Search</li>
            <li style={{paddingLeft: "30px"}}>Account</li>
            <li style={{paddingLeft: "30px"}}>Cart</li>
        </ul>
    </div>
    <div className="news">
        <p style={{textAlign: "center", fontSize:"medium", wordSpacing: "4px", color:"black" ,fontFamily: "Times New Roman, Times, serif"}} >
            Welcome We offer the best in town</p>
    </div>
    <div className="img1">
        <h1>We Offer The Best In town</h1>
        <ul className="l3">
            <li>
                <button>MEN</button>
                
            </li>
            <li style={{paddingLeft: "50px"}}><button>WOMEN</button></li>
        </ul>
    </div>
    <div className="img2">
        <img src="jugaar.JPG" alt=""/>
    </div>
    <div>
        <h1>New Arrival</h1>
        <div style={{display:"flex",flexWrap: "wrap", columnGap:"200px"}}  >
        <div style={{width:"300px" , height :"500px", border: "2px solid black"}} > 
        PRODUCT HERE </div>
        <div style={{width:"300px", height :"500px", border: "2px solid black"}} >
            PRODUCT HERE </div>
        <div style={{width:"300px" , height :"500px", border: "2px solid black"}} >
            PRODUCT HERE </div>
    </div>
    </div>
    <div className="lastframe">
    <div className="menframe">
        <h1>MEN</h1>

    </div>
    <div className="womenframe">
        <h1>WOMEN</h1>

    </div>
</div>
    
</div>
        
    
    );

     
};
export default Explore;