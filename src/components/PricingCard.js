import { Link } from "react-router-dom";
import "./PricingCardStyles.css";
import React from "react";

const PricingCard = () => {
  return (
    <div className="pricing">
      <div className="card-container">

<div className="card">
<h3>- Angular -</h3>
<span className="bar"></span>
<p className="btc">$5000</p>

<ul>
<li>High precision drilling</li>
          <li>Angular adjustment capabilities</li>
          <li>Variable speed control</li>
<li>Robust construction for heavy-duty use</li>
</ul>

<Link to="/contact" className="btn">
    PURCHASE NOW
</Link>
</div>

<div className="card">
<h3>- Shaft -</h3>
<span className="bar"></span>
<p className="btc">$7000</p>

 <ul>
          <li>Perfect for drilling shafts and deep holes</li>
          <li>Multiple speed settings</li>
          <li>Automatic feed control</li>
          <li>Advanced cooling system</li>
 </ul>

<Link to="/contact" className="btn">
    PURCHASE NOW
</Link>
</div>

<div className="card">
<h3>- Gun -</h3>
<span className="bar"></span>
<p className="btc">$10000</p>

<ul>
          <li>Specialized for gun barrel drilling</li>
          <li>Precision rifling capabilities</li>
          <li>Customizable drilling parameters</li>
          <li>Enhanced heat dissipation</li>
</ul>


<Link to="/contact" className="btn">
    PURCHASE NOW
</Link>
</div>

 </div>
    </div>
  )
};

export default PricingCard;