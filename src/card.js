function Card({ quantity, unitPrice }) {
    return ( 
        <div>
            <h4>Available Quanity : {quantity} </h4>
            <h5>Unit Price : {unitPrice} </h5>
        </div> 
    );
}

export default Card;
