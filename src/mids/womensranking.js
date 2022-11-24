import '../style/men.css'
const Womensrank= ({rnk,flg,name,points}) => {
     
    return(
        
            <tr className="mt">
                <td style={{paddingLeft:"30px"}} >{rnk}</td>
                <td style={{paddingLeft:"50px"}}><img style={{width:"5vw" ,height:"7vh"}} src={flg}/></td>
                <td >{name}</td>
                <td style={{paddingLeft:"30px"}}>{points}</td>
            </tr>
        
    );
};
export default Womensrank