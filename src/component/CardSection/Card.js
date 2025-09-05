import React from "react";
import "./Card.css";
import Box from "../Box/Box";

function Card() {
  let cardObj = [
    {
      CardTitle: "Universe",
      image: "https://picsum.photos/300/200?random=1",
      desc: "Explore the infinite cosmos.",
      price: "0.25 ETH",
      buttonText: "Explore",
    },
    {
      CardTitle: "Dying Star",
      image: "https://picsum.photos/300/200?random=2",
      desc: "Witness the collapse of a giant.",
      price: "0.45 ETH",
      buttonText: "Bid Now",
    },
    {
      CardTitle: "Far Far Away",
      image: "https://picsum.photos/300/200?random=3",
      desc: "A galaxy beyond imagination.",
      price: "0.32 ETH",
      buttonText: "Buy Now",
    },
    {
      CardTitle: "Sunshine",
      image: "https://picsum.photos/300/200?random=4",
      desc: "Feel the warmth of eternity.",
      price: "0.15 ETH",
      buttonText: "View Details",
    },
  ];
  return (
    <div className="grid">
      {/* Left Panel */}
      <section className="panel">
        <h3>Recently Added NFTs</h3>
        <div className="muted">Recommended • New Trends • Multi Colors</div>

        <div className="nfts">
          <Box data={cardObj} />
        </div>
      </section>
    </div>
  );
}

export default Card;



export function NewBox() {
  return (
<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt, laborum adipisci aperiam delectus mollitia similique architecto excepturi vitae? Fugit rem laudantium adipisci qui nulla molestias quos laborum, voluptatibus sequi fugiat.</p>
  )
}

