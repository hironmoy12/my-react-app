import React from "react";
import Button from "../Button/Button";

 function Box({ data, onSelect}) {


  return (
    <>
      {data.map((card, index) => (
        <div className="nft" key={index}>
          <img src={card.image} alt={card.CardTitle} className="card-img" />
          <div className="caption">
            <a href="#">{card.CardTitle}</a>
             <p>{card.desc}</p>
              <div className="nft-footer">
              <span className="price">{card.price}</span>
           <Button  text={card.buttonText}
                onClick={() => onSelect(card)} />
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default Box;













