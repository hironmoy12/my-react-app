import React, { useState } from "react";
import "./Topbar.css";
function Topbar() {
  const nftList = ["CryptoPunks", "Bored Ape", "Doodles", "Azuki", "moonbirds"];
   const [query, setQuery] = useState("");
  const [filteredNFTs, setFilteredNFTs] = useState([]);

   const handleSearch = (e) => {
    const value = e.target.value;
    setQuery(value);

    if (value.trim() === "") {
      setFilteredNFTs([]);
    } else {
      const results = nftList.filter((nft) =>
        nft.toLowerCase().startsWith(value.toLowerCase())
      );
      setFilteredNFTs(results);
    }
  };
  return (
    <div className="topbar">
      <div className="search">
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
        >
          <circle cx="11" cy="11" r="7" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
        <input  type="text"
          placeholder="Search NFTs"
          value={query}
          onChange={handleSearch} />
           {/* Dropdown list */}
        {filteredNFTs.length > 0 && (
          <ul className="search-dropdown">
            {filteredNFTs.map((nft, index) => (
              <li key={index}>{nft}</li>
            ))}
          </ul>
        )}
      </div>
      <div className="avatar-group flex right">
        <div title="Messages">💬</div>
        <div title="Notifications">🔔</div>
        <img
          alt="user"
          src={"https://api.dicebear.com/7.x/initials/svg?seed=AR%20Shakir"}
          style={{
            width: 36,
            height: 36,
            borderRadius: 12,
            border: "1px solid var(--line)",
          }}
        />
      </div>
    </div>
  );
}

export default Topbar;
