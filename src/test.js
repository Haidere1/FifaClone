import {Component} from "react"
class Test extends Component {
    
    buttonclicked()
    {
        console.log("you clicked me")
    }
    
   
    
    render() { 
        const MyStyle={
            backgroundColor:"blue"
        }
        return (  
            <button style={MyStyle} onClick={this.buttonclicked}> CLICK ME</button>
        );
    }
}
 
export default Test;