import React from "react";
import { Link } from "react-router-dom";
import './PageHero.css';

const PageHero = ({ title, product }) => {
  return (
    
      <section className="pagehero-container">
        <div className="pagehero">
        <h3>
          <Link className="pagehero-link" to="/">Home</Link>
           {product && <Link className="pagehero-link" to="/products">/ products</Link>} / {title}
        </h3>
        </div>
      </section>
    
  );
}

export default PageHero;