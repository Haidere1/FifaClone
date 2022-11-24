import { useState } from "react";
import './style/div.css'
import Card from "./card";
function Assignment() {
    const Mystyle={
        backgroundColor:"blue",
        width:"50px",
        fontSize:"xx-large"
    }
    const [student, setStudent] = useState(5);
    

    function handleIncrease () {
        setStudent(student+1);
    }

    function handleDecrease () {
        setStudent(student-1);
    }

    return ( 
        <div>
            <div className="position">
            <button style={{backgroundColor:"blue" ,fontSize:"xx-large",width:"50px" }} onClick={handleIncrease}>+</button>
            {student    }
            <button style={Mystyle} onClick={handleDecrease}>-</button>
            </div>
            <p>
                <Card student = {student}/>
            </p>
            {/* <p>
                From Class Component: 
                <Product classq = {quantity} classup = {unitPrice} />
            </p> */}
        </div>
     );
}

export default Assignment;