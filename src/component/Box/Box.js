import React from "react";

function Box() {
   let cardObj = [
    {
      CardTitle: "Universe",
      image: "https://picsum.photos/300/200?random=1", // replace with your own
    },
    {
      CardTitle: "Dying Star",
      image: "https://picsum.photos/300/200?random=2",
    },
    {
      CardTitle: "Far Far Away",
      image: "https://picsum.photos/300/200?random=3",
    },
    {
      CardTitle: "Sunshine",
      image: "https://picsum.photos/300/200?random=4",
    },
  ];

  return (
    <>
      {cardObj.map((card, index) => (
        <div className="nft" key={index}>
          <img src={card.image} alt={card.CardTitle} className="card-img" />
          <div className="caption">
            <a href="#">{card.CardTitle}</a>
          </div>
        </div>
      ))}
    </>
  );
}

export default Box;
