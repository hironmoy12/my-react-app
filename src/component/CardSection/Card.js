import React, {useState} from "react";
import "./Card.css";
import Box from "../Box/Box";
import cardObj from "../../Data";
function Card() {
const [count, setCount] = useState(0);
 const [detailsCard, setDetailsCard] = useState(null);

const increment = () => {
  setCount(count + 1);
  console.log(count)
};

const decrement = () => {
  setCount(count - 1);
};

  return (
    <div className="grid">
      {/* Left Panel */}
      <section className="panel">
        <h3>Recently Added NFTs</h3>
        <div className="muted">Recommended • New Trends • Multi Colors</div>

        <div className="nfts">
          <Box data={cardObj} onSelect={setDetailsCard}/>
        </div>

       <div className="counter">
        <p>
          Counte
        </p>
     
        <button onClick={increment} style={{margin:'10px', background: 'green', border: '0', color: '#fff', padding: '10px'}}>+</button>

         <b><span>{count}</span></b>  
      <button onClick={decrement} style={{margin:'10px', background: 'red', border: '0', color: '#fff', padding: '10px'}}>-</button>
       </div>


      </section>

   {/* Show details in inputs */}
   
        {detailsCard && (
          <div className="details-form" style={{ marginTop: "20px" }}>
            <h4>Selected Card Details</h4>
            <input
              type="text"
              value={detailsCard.CardTitle}
              readOnly
              style={{ display: "block", margin: "10px 0", padding: "8px" }}
            />
            <input
              type="text"
              value={detailsCard.desc}
              readOnly
              style={{ display: "block", margin: "10px 0", padding: "8px" }}
            />
            <input
              type="text"
              value={detailsCard.price}
              readOnly
              style={{ display: "block", margin: "10px 0", padding: "8px" }}
            />
          </div>
        )}


    </div>
  );
}

export default Card;

// NewBox Component



export function NewBox() {
  return (
<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt, laborum adipisci aperiam delectus mollitia similique architecto excepturi vitae? Fugit rem laudantium adipisci qui nulla molestias quos laborum, voluptatibus sequi fugiat.</p>
  )
}

