import React from 'react'
import './Sidebar.css';
function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="brand">
        <div className="logo"></div>
        <h1>Xoi</h1>
      </div>

      <nav className="nav">
        <a href="#" className="active">
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10
              a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4
              a1 1 0 001 1m-6 0h6"/>
          </svg>
          Dashboard
        </a>
        <a href="#">Buy & Sell</a>
        <a href="#">Swap</a>
        <a href="#">NFTs</a>
        <a href="#">My Favorites</a>
      </nav>

      <div>
        <div className="section-title">Trending Coins</div>
        <div className="coins">
          <div className="coin"><span className="dot btc"></span> Bitcoin</div>
          <div className="coin"><span className="dot eth"></span> Ether</div>
          <div className="coin"><span className="dot bch"></span> Bitcoin Cash</div>
          <div className="coin"><span className="dot xlm"></span> Stellar</div>
        </div>
      </div>

      <div className="help" style={{ marginTop: 18 }}>
        <div style={{ fontWeight: 700, marginBottom: 8 }}>Need Help?</div>
        <button>Contact</button>
      </div>
    </aside>
  )
}

export default Sidebar
