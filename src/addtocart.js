import newimage from './images/newimage.webp'
import site from './images/site.png'
import './addtocart.css'

const Addtocart = (image) => {
    return(
<div>
        <div className="topframe">
        <div className="logo">
            <img className="logoimg" src={site} alt="no image"/>
        </div>
        <ul className="l1">
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
        <p style={{textAlign: "center", fontSize:"medium", wordSpacing: "4px",color:"black",fontFamily: 'Times New Roman, Times, serif'}} >
            Welcome We offer the best in town</p>
    </div>
    <h1 style={{textAlign:"center", marginTop: "50px"}}>SHOPS MENU</h1>
    <div className="menumen">
        <ul>
            <li>All Mens</li>
            <li className="pad">T Shirts</li>
            <li className="pad">New Arrival</li>
            <li className="pad">Outerwear</li>
            <li className="pad">Bottoms</li>
            <li className="pad">Goods</li>
        </ul>

    </div>
    <div className='img2'>
        <img className="cartimg" src={image} alt=""/>
        <div className='cart'>
            <h1>
                Out Post Canvas Jacket
            </h1>
            <p>180$</p>
            <p>Color:<b> TOBACCO</b> </p>
            <h4>SIZE</h4>
            <div style={{display:"flex" , justifyContent:"space-around"}}>
                <div className="size"> XS</div>
                <div className="size"> S</div>
                <div className="size"> M</div>
                <div className="size">L</div>
                <div className="size">XL</div>
            </div>
            
            <p className="cartbtn">ADD TO CART</p>
        </div>
        </div>
        

     
    </div>
    );
     
};
export default Addtocart;