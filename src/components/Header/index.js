import React, { useState, useEffect } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { cartStore } from "../../redux";
import { ImUserPlus } from "react-icons/im";
import { FaCartPlus } from "react-icons/fa";
import img1 from "../../assets/images/logo.svg";

const Header = () => {
  const [count, setCount] = useState();

  useEffect(() => {
    const unsubscribe = cartStore.subscribe(() =>
      setCount(
        cartStore.getState().reduce((total, product) => {
          return total + product.quantity;
        }, 0)
      )
    );

    return () => {
      unsubscribe();
    };
  });

  return (
    <header className="header">
      <div className="header-container">
        <div>
          <Link to="/">
            <img className="header-img" src={img1} />
          </Link>
        </div>
        <ul>
          <li>
            <Link className="header-link" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="header-link" to="/about">
              About
            </Link>
          </li>
          <li>
            <Link className="header-link" to="/products">
              Products
            </Link>
          </li>
        </ul>
        <div>
          <Link className="header-link  header-cart" to="/cart">
            Cart
            <span>
              <FaCartPlus className="icon" />
            </span>
            {count > 0 && <span className="number-cart">{count}</span>}
          </Link>
          <Link className="header-link login" to="/log-in">
            Login
            <span>
              <ImUserPlus className="icon" />
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
