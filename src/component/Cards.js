// Tile.js
import React from 'react';

const Cards = ({ accountName, accountNumber, availableBlance,routingNumber,cardsList }) => {
console.log("((((((((((((((((((((((((((((((((((((((((((((((((((")
console.log(cardsList);
  return (
  
      <div className="card transparent-edge">
        <div className="card-content">
          <h3>{accountName}</h3>
          <h3><b>AccountNumber: </b>{accountNumber}</h3>
          <h3><b>RoutingNumber:</b> {routingNumber}</h3>
          <h3><b>Available Balance: $</b> {availableBlance} </h3>
          {/* <h3 align="center"><b>Available Cards</b></h3>
          {cardsList.map((card) => (
           
            <div>
          <h4><b>card Number: </b>{card.cardNumber}</h4>
          <h4>{new Date(card.cardValidThroughDate).getMonth()}/{new Date(card.cardValidThroughDate).getFullYear()%100}</h4>
          <h4>{card.cardType}</h4>
          <h4>{card.cvv}</h4>
          <h4>{card.isCreditCard}</h4>
          </div>
        ))} */}
        {null!=cardsList && cardsList.length>0?(<><h3 align="center"><b>Available Cards</b></h3>
          {cardsList.map((card) => (
           
            <div>
          <h4><b>card Number: </b>{card.cardNumber}</h4>
          <h4>{new Date(card.cardValidThroughDate).getMonth()}/{new Date(card.cardValidThroughDate).getFullYear()%100}</h4>
          <h4>{card.cardType}</h4>
          <h4>{card.cvv}</h4>
          <h4>{card.isCreditCard}</h4>
          </div>
        ))}</> ):(<><h5><b>No Cards Are Available</b>  </h5></>)};
      </div>
    </div>
  );
};

export default Cards;
