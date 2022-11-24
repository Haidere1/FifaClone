import { useState } from 'react';
import philphoden from '../images/philphoden.jpg'
function Leftsidebar() {
    const[card,setCard]=useState([
        { id:0,content:"hello bhai mai content hu",img:philphoden,title:"News Flash"},
        { id:1,content:"hello bhai mai content hu2",img:philphoden,title:"News Flash"},
        { id:2,content:"hello bhai mai content hu3",img:philphoden,title:"News Flash"}
    ]);
    const handledelete =(cid)=>
    {
        const newdata=card.filter((sid)=>sid.id!=cid)
        setCard(newdata);
    }
    return (

        <return>
              {
                card.map((setCard,key)=>(
                    
                    <div className="card" style={{width: "12rem",color:"black" ,marginLeft:"10px",borderRadius:"20px"}} >
                    <img className="card-img-top" src={setCard.img} alt="Image" style={{borderRadius:"20px" ,height:"100%"}}/>
                    <div className="card-body">
                     <h5 className="card-title">{setCard.title}</h5>
                    <p className="card-text">{setCard.content}</p>
                     <button className="btn btn-danger" onClick={()=>handledelete(setCard.id)}>Delete</button>
                    
                     </div>
                    </div>


                ))
            }
        </return>
      );
}

export default Leftsidebar;