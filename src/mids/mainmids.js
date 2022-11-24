import Fifa from "./fifa";
import Footer from "./footer";
import Leftsidebar from "./leftsidebar";
import Middlesection from "./middlesection";
import Middlebotttom from "./middlesectionbottom";
import Submenu from "./submenu";
import {Link} from 'react-router-dom'
import{ BrowserRouter as Router,Routes, Route} from 'react-router-dom';
function Mainfunction() {
    return ( 
        <div style={{padding:0, margin:0,fontFamily:"Times New Roman"}}>
            <Fifa/>
            <Submenu/>
            
            <div className="container">
                <div className="row">

                    {/* leftsidebar */}

                <div className="col-2">
                    <h1>Left Side bar</h1>
                    <Leftsidebar/>  
                </div>
                {/* middletop */}

                <div className="col-9" style={{marginLeft:"40px"}} >
                <div className="row">
                    <Middlesection/>
                </div>
                <div className="row " style={{marginTop:"10px"}}>
                    <Middlebotttom/>
                </div>
                </div>
                
                </div>
                
                

            </div>
            <Footer/>
            <Routes>

            <Route path="/Sub" element={<Submenu/>}></Route>

            </Routes>
            
        </div>
     );
}

export default Mainfunction;
