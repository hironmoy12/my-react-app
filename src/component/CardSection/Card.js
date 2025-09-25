import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Card.css";

function Card() {
  const navigate = useNavigate();
  const [users, setUsers] = useState(() => {
    return JSON.parse(localStorage.getItem("users")) || [];
  });

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validUser, setValidUser] = useState(false);
  const [showValidOnly, setShowValidOnly] = useState(false);
  const [errors, setErrors] = useState({
    name: "",
    age: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const namePattern = /^[a-zA-Z ]+$/;
    const agePattern = /^[1-9][0-9]{0,2}$/;
    const passwordPattern =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    let valid = true;
    const newErrors = { name: "", age: "", password: "" };

    if (!namePattern.test(name)) {
      newErrors.name = "Name must contain only letters and spaces";
      valid = false;
    }
    if (!agePattern.test(age)) {
      newErrors.age = "Age must be a number between 1-100";
      valid = false;
    }

    if (!passwordPattern.test(password)) {
      newErrors.password =
        "Password must be 6-20 chars, include 1 number & 1 special char";
      valid = false;
    }

    setErrors(newErrors);

    if (!valid) return;

    const newUser = { id: Date.now(), name, age, email, password, validUser };

    const stored = JSON.parse(localStorage.getItem("users")) || [];
    stored.push(newUser);
    localStorage.setItem("users", JSON.stringify(stored));

    setUsers(stored);
    setName("");
    setAge("");
    setEmail("");
    setPassword("");
    setValidUser(false);
    setErrors({ name: "", age: "", password: "" });
    console.log("Saved User:", newUser);
  };

  const deleteHandler = (userId) => {
    setUsers((prevUsers) => {
      const updatedUsers = prevUsers.filter((user) => user.id !== userId);

      localStorage.setItem("users", JSON.stringify(updatedUsers));

      return updatedUsers;
    });
  };

  return (
    <div className="grid">
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

          <span className="error">{errors.name}</span>

          <input
            type="tel"
            name="age"
            placeholder="Enter age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
          />

          <span className="error">{errors.age}</span>
          <input
            type="email"
            name="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <br />

          <input
            type="password"
            name="password"
            value={password}
            placeholder="Enter password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <span className="error">{errors.password}</span>
          <div className="check-box">
            <input
              type="checkbox"
              id="validUser"
              checked={validUser}
              onChange={(e) => setValidUser(e.target.checked)}
            />
            <label htmlFor="validUser">
              <b>Valid User</b>
            </label>
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
      <div
        className="show-valid-user"
        style={{ textAlign: "right", marginTop: "20px" }}
      >
        <input
          type="checkbox"
          name=""
          id=""
          value={showValidOnly}
          onChange={(e) => setShowValidOnly(e.target.checked)}
        />
        <label htmlFor="validUser">
          <b>Show Valid User Only</b>
        </label>
      </div>
      <div className="saved-users">
        <div className="user-cards">
          {users
            .filter((user) => (showValidOnly ? user.validUser : true))
            .map((user) => (
              <div key={user.id} className="user-card">
                <h4>{user.name}</h4>
                <p>
                  <strong>Age:</strong> {user.age}
                </p>
                <p>
                  <strong>Email:</strong> {user.email}
                </p>
                <p>
                  <strong>Password:</strong> {user.password ? "******" : "N/A"}
                </p>
                <p>
                  <strong>Valid User:</strong> {user.validUser ? "Yes" : "No"}
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
