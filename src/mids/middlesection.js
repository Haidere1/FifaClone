import { useState } from "react";
import philphoden from '../images/philphoden.jpg'
import '../style/middlesectio.css'

const Middlesection = (e) => {
    const[card,setCard]=useState([
        { id:0,content:"hello bhai mai content hu",img:philphoden,title:"News Flash"},
        { id:1,content:"hello bhai mai content hu2",img:philphoden,title:"News Flash"},
        { id:2,content:"hello bhai mai content hu3",img:philphoden,title:"News Flash"}
    ]);
    const [news,setNews]=useState([
        {id:0,content:"Global star Joins ",img:philphoden},
        {id:1,content:"Global star Joins2 ",img:philphoden},
        {id:2,content:"Global star Joins3 ",img:philphoden},
        {id:3,content:"Global star Joins4 ",img:philphoden},
        {id:4,content:"Global star Join5 ",img:philphoden},
        {id:5,content:"Global star Joins6 ",img:philphoden}
        
    ])
    const handledelete =(cid)=>
    {
        const newdata=news.filter((sid)=>sid.id!=cid)
        setNews(newdata);
    }

    return(
        <div className="container" style={{backgroundColor:"rgb(37,150,190)" ,color:"white"}}>
            <div className="row">
        <div className="main col-3">
     <div className="leftside">
        <div className="content">
    <h2>Football Unites The World</h2>
    <p>
        Football Unites the World is a global movement to inspire,unite and develop
        through football.
    </p>
    <h2>More From This Topic</h2>
    </div>
    </div>
    </div>

    {/* right side starts */}
    {/* <div className="container rightside" style={{backgroundColor:"rgb(37,150,190)"}}> */}
    <div className="col-9">

        <div className="row" style={{marginTop:"10px", display:"flex"}}>
            {
                card.map((setCard,key)=>(
                    
                    <div className="card" style={{width: "10rem",color:"black" ,marginLeft:"10px",borderRadius:"20px"}} >
                    <img className="card-img-top" src={setCard.img} alt="Image" style={{borderRadius:"20px" ,height:"100%"}}/>
                    <div className="card-body">
                     <h5 className="card-title">{setCard.title}</h5>
                    <p className="card-text">{setCard.content}</p>
                    {/* <button className="btn btn-danger" onClick={()=>handledelete(setCard.id)}>Delete</button> */}
                    
                     </div>
                    </div>


                ))
            }
        
        </div>
        
       
        <div className="row" style={{marginTop:"10px", }}>
            <h3>More</h3>
            <p style={{color:"darkgray"}}>--------------------------------------------------------------------------------------------------</p>
            {
                news.map((setNews,key)=>(
                    <div className="news" style={{borderRadius:"10px"}}>
                        <img style={{borderRadius:"10px"}} src={setNews.img}/> 
                        
                        <p style={{fontSize:"small"}}>{setNews.content}</p>
                        <button className="btn btn-danger" style={{height:"30px" ,width:"50px"}} onClick={()=>handledelete(setNews.id)}>Delete</button>
                     
                    </div>
                   



                ))
            }

        </div>

        </div>
    </div>
    </div>
    
);

     
};
export default Middlesection;