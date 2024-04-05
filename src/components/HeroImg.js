import "./HeroImgStyles.css"
import React from 'react'
import IntroImg from "../assets/intro-bg.jpg"
import { Link } from "react-router-dom"
const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="into-img" src={IntroImg} alt="IntroImg" />
      </div>
      <div className="content">
        <p>Hi,I'M FREELANCER.</p>
        <h1>Mechanical Engineer.</h1>
<div>
    <Link to="/products" className="btn">Products</Link>
    <Link to="/contact" className="btn">contact</Link>

</div>
      </div>
    </div>
  )
}

export default HeroImg
