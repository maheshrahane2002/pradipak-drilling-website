import { FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from "react-icons/fa";
import "./FooterStyles.css";
import React from 'react'

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
<div className="left">
<div className="location">
    <FaHome size={20} style={{color:"#fff", marginRight: "2rem"}} />
    <div>
    <p>At/Po.Belsarwadi.</p>
    <p>Tal.Ambegaon,Dist.Pune.</p>
    <p>MH-412 406.</p>
    <p>India.</p>   
     </div>
</div>

<div className="phone">
    <h4><FaPhone size={20} style={{color:"#fff", marginRight: "2rem"}} />
08069033739 </h4>
</div>
<div className="email">
    <h4><FaMailBulk size={20} style={{color:"#fff", marginRight: "2rem"}} />
pradiipak01@gmail.com</h4>
</div>
</div>

<div className="right">
<h4>About the Company</h4>
<p>This is me Sujata Nighut,CEO & Founder of Pradipak Drilling Solutions Private Limited.It provides you the best range of gundrillng service, deep hole gun drilling & bta drilling machine with effective & timely delivery.</p>
<div className="social">
    <FaFacebook size={30} style={{color:"#fff", marginRight: "1rem"}} />
    <FaTwitter size={30} style={{color:"#fff", marginRight: "1rem"}} />
    <FaLinkedin size={30} style={{color:"#fff", marginRight: "1rem"}} />
</div>
</div>
      </div>
    </div>
  )
}

export default Footer
