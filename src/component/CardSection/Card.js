import React, {useState} from "react";
import "./Card.css";
import Box from "../Box/Box";
import cardObj from "../../Data";
function Card() {
const [count, setCount] = useState(0);

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
          <Box data={cardObj} />
        </div>

       <div className="counter">
        <p>
          Counter
        </p>
     
        <button onClick={increment} style={{margin:'10px', background: 'green', border: '0', color: '#fff', padding: '10px'}}>+</button>

         <b><span>{count}</span></b>  
      <button onClick={decrement} style={{margin:'10px', background: 'red', border: '0', color: '#fff', padding: '10px'}}>-</button>
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

