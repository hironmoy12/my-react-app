import './App.css';

function App() {
  return (
  <div className="app">
  <aside className="sidebar">
      <div className="brand">
        <div className="logo"></div>
        <h1>Xoi</h1>
      </div>
 
      <nav className="nav">
        <a href="#" className="active">
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>
          Dashboard
        </a>
        <a href="#">
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 1.567-3 3.5S10.343 15 12 15s3-1.567 3-3.5S13.657 8 12 8z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 4H5a2 2 0 00-2 2v1h18V6a2 2 0 00-2-2zM3 10h18v4H3v-4zm0 6h18v2a2 2 0 01-2 2H5a2 2 0 01-2-2v-2z"/></svg>
          Buy & Sell
        </a>
        <a href="#">
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7h16M4 12h16M4 17h16"/></svg>
          Swap
        </a>
        <a href="#">
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7l9-4 9 4-9 4-9-4zm0 6l9 4 9-4"/></svg>
          NFTs
        </a>
        <a href="#">
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
          My Favorites
        </a>
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
 
    {/* <!-- MAIN --> */}
    <main className="main">
      <div className="topbar">
        <div className="search">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
          <input type="text" placeholder="Search NFTs" />
        </div>
        <div className="avatar-group flex right">
          <div title="Messages">💬</div>
          <div title="Notifications">🔔</div>
          <img
            alt="user"
            src={"https://api.dicebear.com/7.x/initials/svg?seed=AR%20Shakir"}
            style={{ width: 36, height: 36, borderRadius: 12, border: '1px solid var(--line)' }}
          />
        </div>
      </div>
 
      <div className="grid">
        {/* <!-- Left side --> */}
        <section className="panel">
          <h3>Recently Added NFTs</h3>
          <div className="muted">Recommended • New Trends • Multi Colors</div>
          <div className="nfts">
            <div className="nft">
              <div className="caption">Universe</div>
              <a href="#">Link Here</a>
            </div>
            <div className="nft"><div className="caption">Dying Star</div></div>
            <div className="nft"><div className="caption">Far Far Away</div></div>
          </div>
 
         
        </section>
      </div>
    </main>
    </div>
  );
}

export default App;
