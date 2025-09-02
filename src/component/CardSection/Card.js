import React from 'react'
import './Card.css';
function Card() {
  return (
      <div className="grid">
        {/* <!-- Left side --> */}
        <section className="panel">
          <h3>Recently Added NFTs</h3>
          <div className="muted">Recommended • New Trends • Multi Colors</div>
          <div className="nfts">
            <div className="nft">
              <div className="caption"><a href="#">Universe</a></div>
              
            </div>
            <div className="nft"><div className="caption"><a href='#'>Dying Star</a></div></div>
            <div className="nft"><div className="caption"><a href='#'>Far Far Away</a></div></div>
          </div>
 
         
        </section>
      </div>
  )
}

export default Card
