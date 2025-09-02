import React from 'react'

function Box() {
let cardObj = [
    {
        CardTitle: "universe"
    },
    {
        CardTitle: "Dying Star"
    },
    {
        CardTitle: "Far Far Away"
    },
    {
        CardTitle: "Sunshine"
    }
];


  return (
<>
      {cardObj.map((card, index) => (
        <div className="nft" key={index}>
          <div className="caption">
            <a href="#">{card.CardTitle}</a>
          </div>
        </div>
      ))}
    </>
  )
}

export default Box