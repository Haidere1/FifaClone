import { useState } from "react";
import { Link } from "react-router-dom";
import Lab from "./lab";
import './style/div.css'
function Stdform() {
    const myStyle={

         fontFamily:"Times New Roman",width:"30vw",position:"relative",
        top:"20vh",left:"34vw"
    }
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

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

            <form onSubmit={handleSubmit} style={myStyle}>
                <h1 className="position">
                    Check Marks
                </h1>
                <table style={{fontSize:"xx-large",color:"gray"}}>
                    <tr>
                        <th style={{paddingBottom:"50px"}}>
                            Username:
                        </th>
                        <td style={{paddingBottom:"50px"}}>
                         <input type="text" value={username} onChange={handleChange} />
                        </td>
                    </tr>
                    <tr >
                        <th>
                            Password:
                        </th>
                        <td>
                         <input type="password" value={password} onChange={handleChange2} />
                        </td>
                    </tr>

                </table>
                
                <button style={{textDecoration:"none",marginLeft:"300px" ,marginTop:"100px",border:"none" ,fontFamily:"Times New Roman"}}>
                    <Link style={{color:"gray"}} to='/check'>
                    Check Marks
                    </Link></button>
            </form>

            {username}
            {password}
        </div>
     );
}

export default Stdform;