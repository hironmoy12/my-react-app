import React, { useId, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Card.css";
// import Box from "../Box/Box";
// import cardObj from "../../Data";
function Card() {
  // const [count, setCount] = useState(0);
  // const [detailsCard, setDetailsCard] = useState(null);
  
  const navigate = useNavigate();
  const [users, setUsers] = useState(() => {
    return JSON.parse(localStorage.getItem("users")) || [];
    
  });
  
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = { id: Date.now(), name, age, email };

    const stored = JSON.parse(localStorage.getItem("users")) || [];
    stored.push(newUser);
    localStorage.setItem("users", JSON.stringify(stored));

    setUsers(stored);
    setName("");
    setAge("");
    setEmail("");
  };



 const deleteHandler = (userId) => {
  setUsers((prevUsers) => {
    const updatedUsers = prevUsers.filter((user) => user.id !== userId);

   
    localStorage.setItem('users', JSON.stringify(updatedUsers));

    return updatedUsers;
  });
};

 
  

  // const increment = () => {
  //   setCount(count + 1);
  //   console.log(count);
  // };

  // const decrement = () => {
  //   setCount(count - 1);
  // };

  return (
    <div className="grid">
      {/* Left Panel */}
      {/* <section className="panel">
        <h3>Recently Added NFTs</h3>
        <div className="muted">Recommended • New Trends • Multi Colors</div>

        <div className="nfts">
          <Box data={cardObj} />
        </div>

        <div className="counter">
          <p>Counter</p>

          <button
            onClick={increment}
            style={{
              margin: "10px",
              background: "green",
              border: "0",
              color: "#fff",
              padding: "10px",
            }}
          >
            +
          </button>

          <b>
            <span>{count}</span>
          </b>
          <button
            onClick={decrement}
            style={{
              margin: "10px",
              background: "red",
              border: "0",
              color: "#fff",
              padding: "10px",
            }}
          >
            -
          </button>
        </div>
      </section> */}

      {/* {detailsCard && (
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
      )} */}

      {/* 🔹 User Form */}
      <div style={{ marginTop: "20px", textAlign: "left" }}>
        <form onSubmit={handleSubmit} className="form-container">
          <h3>Add User</h3>
          <input
            type="text"
            name="name"
            placeholder="Enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <br />
          <input
            type="tel"
            name="age"
            placeholder="Enter age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
          />
          <br />
          <input
            type="email"
            name="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
      <div className="saved-users">
       
        <div className="user-cards">
          {users.map((user) => (
            
            <div key={user.id} className="user-card">
           
              <h4>{user.name}</h4>
              <p>
                <strong>Age:</strong> {user.age}
              </p>
              <p>
                <strong>Email:</strong> {user.email}
              </p>
              <button onClick={() => navigate(`/details/${user.id}`)}>
                View Details
              </button>
              <br />
                <button onClick={() => deleteHandler(user.id)}>Delete</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Card;

// export function NewBox() {
//   return (
//     <p>
//       Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt,
//       laborum adipisci aperiam delectus mollitia similique architecto excepturi
//       vitae? Fugit rem laudantium adipisci qui nulla molestias quos laborum,
//       voluptatibus sequi fugiat.
//     </p>
//   );
// }
