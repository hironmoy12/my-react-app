import React, { useState } from "react";
import Button from "../Button/Button";

function Box({ data, onSelect }) {
  const [activeId, setActiveId] = useState(null);

  const handleClick = (card) => {
    setActiveId(card.id); 
    onSelect(card); 
  };

  return (
    <>
      {data.map((card) => (
        <div className="nft" key={card.id}>
          <img src={card.image} alt={card.CardTitle} className="card-img" />
          <div className="caption">
            <div className="nft-footer">
              <Button text={card.buttonText} onClick={() => handleClick(card)} />
            </div>
          </div>

          {activeId === card.id && (
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
