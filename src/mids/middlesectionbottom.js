import { useState } from 'react';
import mbfifa from '../images/mbfifa.jpeg'
import Mensrank from './mensranking';
import brazil from '../images/brazil.jpeg'
import belgium from '../images/belgium.jpeg'
import argentina from '../images/argentina.jpeg'
import france from '../images/france.jpeg'
import england from '../images/england.jpeg'
import Womensrank from './womensranking';
const Middlebotttom = (e) => {
    const [rank,setRank]=useState(
        [
            {rnk:1,flg:brazil,name:"Brazil",pts:1841.30 },
            {rnk:2,flg:belgium,name:"Belgium",pts:1816.70 },
            {rnk:3,flg:argentina,name:"Argentina",pts:1773.88 },
            {rnk:4,flg:france,name:"France",pts:1759.78 },
            {rnk:5,flg:england,name:"England",pts:1728.47 }
        ]
    );
    const[wrank,setWrank]= useState([
            {rnk:1,flg:brazil,name:"Brazil",pts:1841.30 },
            {rnk:2,flg:belgium,name:"Belgium",pts:1816.70 },
            {rnk:3,flg:argentina,name:"Argentina",pts:1773.88 },
            {rnk:4,flg:france,name:"France",pts:1759.78 },
            {rnk:5,flg:england,name:"England",pts:1728.47 }
        
    ]);
         return(
     <div className="container" style={{fontFamily:"EA Sans Curves",marginTop:"20px"}}> 

        {/* first section */}
        <div className="row">
             <div className="col-3">
                <img src={mbfifa} style={{width:"15vw",paddingBottom:"20px"}}/>
                <h1>World Ranking</h1>
                <p>The officical world ranking of the international mens and womens team.</p>

                <h5>FIFA/Coca-Cola World Ranking</h5>


             </div>

              {/* mens ranking */}

              <div className='col-4' >
                <h1>Men</h1>
                <ul style={{display:"flex" }}>
                    <li>RK</li>
                    <li style={{paddingLeft:"50px"}}>Team</li>
                    <li style={{paddingLeft:"100px"}}>Team Points</li>
                </ul>
                <table>
                    
                    
                        {
                            rank.map((setRank,key)=>(
                                
                                <Mensrank rnk={setRank.rnk} flg={setRank.flg} name={setRank.name} points={setRank.pts}/>
                                
                                
                            ))
                        }
                    
                </table>

              </div>

              {/* womens ranking */}
              <div className='col-4' style={{borderLeft:"1px dotted gray"}}>
                <h1>
                    Women
                </h1>
                <ul style={{display:"flex" }}>
                    <li>RK</li>
                    <li style={{paddingLeft:"50px"}}>Team</li>
                    <li style={{paddingLeft:"100px"}}>Total Points</li>
                </ul> 
                <table>
                    
                    
                         {
                            wrank.map((setWrank,key)=>(
                                
                                <Womensrank rnk={setWrank.rnk} flg={setWrank.flg} name={setWrank.name} points={setWrank.pts}/>
                                
                            
                            ))
                        } 
                    
                </table>

              </div>
        </div>

       
       

    </div>
        );
};
export default Middlebotttom;