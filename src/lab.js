import { useState } from "react";
import { Link } from "react-router-dom";
import Result from "./result";

function Lab() {
    const myStyle={
        fontFamily:"Quesha"
    }
    const [result, setResult]=useState(0);
    const [Student,setMarks]=useState([
        {id:1,marks:20,marks2:40},
        {id:2,marks:40,marks2:31},
        {id:3,marks:60,marks2:52},
        {id:4,marks:30,marks2:33},
        {id:5,marks:80,marks2:10},
        {id:6,marks:10,marks2:50},
        
    ]);
     const [total,setTotal]=useState(0);
     function totalmrks(setMarks)
     {  
       setTotal(setMarks.marks+setMarks.marks2);
     }
     const handleChange = (e) =>  {
        
        setResult(total+result);
     }
     function HandleDelete(stdid)
     {
        const filteredData=Student.filter((se) =>se.id != stdid);
        setMarks(filteredData)

     }

    return ( 
        
            <div style={myStyle}>
                <table  className="table table-bordered">
                    <tr>
                        <th>Student No</th>
                        <th>Marks1</th>
                        <th>Marks2</th>
                    </tr>
                    {
                        Student.map(( setMarks, key) => (
                            <tr key={setMarks.id}>
                                <td>{setMarks.id}</td>
                                <td>{setMarks.marks}</td>
                                <td>{setMarks.marks2}</td>
                                <button onClick={()=>totalmrks(setMarks)}>Total</button>
                                <button className="btn btn-danger" onClick={() => HandleDelete(setMarks.id)}>Delete</button>
                                
                            </tr> 
                        ))

                        
                    }
                    <p style={{fontSize:"xx-large"}}> This Student Gained <Result total={total}/> Total Marks Of Students</p>
                    <input type="text" value={total}/>
                    <div>
                    <button className="btn btn-danger"   onClick={handleChange}> +</button>
                    </div>
                    <div>
                    <input type="text" value={result}/>
                    </div>
                   

                </table>
                
                

            </div>



            
        
       
     );
}

export default Lab;