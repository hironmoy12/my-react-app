import React from 'react';
import '../DetailsPage/Details.css';
import { useParams } from "react-router-dom";
function DetailsPage() {
     const { id } = useParams();
  const users = JSON.parse(localStorage.getItem("users")) || [];
  const user = users.find((u) => u.id === Number(id));

  if (!user) return <h2>User not found</h2>;
  return (
    <div className="details-page">
      <h2>Details for {user.name}</h2>
      <p><strong>Age:</strong> {user.age}</p>
      <p><strong>Email:</strong> {user.email}</p>
    </div>
  )
}

export default DetailsPage
