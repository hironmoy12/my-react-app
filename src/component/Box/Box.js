import React, { useState } from "react";
import Button from "../Button/Button";

function Box({ data, onSelect }) {
  const [activeCard, setActiveCard] = useState(null);

  const handleClick = (card) => {
    setActiveCard(card);
    onSelect(card);
  };

  return (
    <>
      {data.map((card, index) => (
        <div className="nft" key={index}>
          <img src={card.image} alt={card.CardTitle} className="card-img" />
          <div className="caption">
            {/* <a href="#">{card.CardTitle}</a> */}
            {/* <p>{card.desc}</p> */}
            <div className="nft-footer">
              {/* <span className="price">{card.price}</span> */}
              <Button
                text={card.buttonText}
                onClick={() => handleClick(card)}
              />
            </div>
          </div>

          {/* Show details inside the Box itself */}
          {activeCard === card && (
            <div className="box-details">
              <h5>{card.CardTitle}</h5>
              <p>{card.desc}</p>
              <p>
                <b>{card.price}</b>
              </p>
            </div>
          )}
        </div>
      ))}
    </>
  );
}

export default Box;
