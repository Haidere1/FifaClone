import { useState } from "react";
import Result from "./result";
import Result2 from "./result2";

function Check2() {
    const myStyle={
        fontFamily:"Quesha"
    }
    const [bill, setBill]=useState(0);
    const [total,setTotal]=useState(0);
    const [amount,setAmount]=useState([
        {id:1,product1:20,product2:40},
        {id:2,product1:40,product2:31},
        {id:3,product1:60,product2:52},
        {id:4,product1:30,product2:33},
        {id:5,product1:80,product2:10},
        {id:6,product1:10,product2:50},
    ]);
    function indbill(setAmount)
    {  
      setBill(setAmount.product1+setAmount.product2);
    }
    const handleChange = (e) =>  {
       
       setTotal(bill+total);
    }
    function HandleDelete(stdid)
    {
       const filteredData=amount.filter((se) =>se.id != stdid);
       setAmount(filteredData)

    }
    
    return (  
        <div style={myStyle}>
        <table  className="table table-bordered">
            <tr>
                <th>Order#</th>
                <th>Product1</th>
                <th>Product2</th>
            </tr>
            {
                amount.map(( setAmount, key) => (
                    <tr key={setAmount.id}>
                        <td>{setAmount.id}</td>
                        <td>{setAmount.product1}</td>
                        <td>{setAmount.product2}</td>
                        <button className="btn btn-primary" onClick={()=>indbill(setAmount)}>Total</button>
                        <button className="btn btn-danger" onClick={() => HandleDelete(setAmount.id)}>Delete</button>
                        
                    </tr> 
                ))

                
            }
            <p style={{fontSize:"xx-large"}}> Individual Bill: <Result2 bill={bill}/> Total Amount Combined</p>
            <input type="text" value={bill}/>
            <div>
            <button className="btn btn-danger"   onClick={handleChange}> +</button>
            </div>
            <div>
            <input type="text" value={total}/>
            </div>
           

        </table>
        
        

    </div>


    );
}

export default Check2
;