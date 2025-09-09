import React from 'react'
import "./Button.css"
import { Outlet, useNavigate } from 'react-router-dom'
function Button({text}) {
const navigate = useNavigate();
  const navigateButton = () => {
   navigate('buy-sell');
  }
  return (
    <>
    <button className="custom-btn" onClick={navigateButton}>{text}</button>
    </>
   
  )
}

export default Button;
