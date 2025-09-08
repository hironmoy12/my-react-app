import React from "react";
import "./Card.css";
import Box from "../Box/Box";
import cardObj from "../../Data";
function Card() {

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

