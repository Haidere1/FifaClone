import vodd from './video/vodd.mp4'


import './login.css'
const Login = (e) => {
    return(

        <div>
            
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
        <input type="text" name="" id=""/>
    </td>
    </tr>

        
    <br/>
    <tr>
     <td style={{marginLeft:"50%"}}>
    <label><b> PASSWORD </b></label>
    </td>
    <td>
        <input type="password" name="" id=""/>
    </td>
    </tr>
    </table>
    <button  className="btn1">Login</button>
    <p style={{fontSize: 30, marginTop:"4vh"}}><b> Dont have an account?</b></p>
     <button  className="btn1"> <a href="signup.html"> Signup </a></button>
    </div>
   

   

        </div>
    )
     
};
export default Login;