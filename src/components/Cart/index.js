import React from "react";
import "./Cart.css";
import PageHero from "../PageHero";
import { BsTrash } from "react-icons/bs";
import { FaPlus, FaMinus } from "react-icons/fa";
import { Link } from "react-router-dom";
import {
  cartStore,
  removeFromCart,
  incrementCart,
  decrementCart,
  clearCart,
} from "../../redux";

const Cart = ({ products }) => {
  if (!products || !products.length) {
    return (
      <div className="empty">
        <h2>Your cart is empty</h2>
        <Link to="/products">
          <button className="cart-button">FILL IT</button>
        </Link>
      </div>
    );
  }

  const clearShoppingHandler = () => {
    cartStore.dispatch(clearCart());
  };

  const removeHandler = (product) => {
    cartStore.dispatch(removeFromCart(product));
  };

  const incrementHandler = (product) => {
    cartStore.dispatch(incrementCart(product));
  };

  const decrementHandler = (product) => {
    cartStore.dispatch(decrementCart(product));
  };

  return (
    <>
      <PageHero title="Cart" />
      <div className="cart">
        <div>
          <table className="table">
            <thead>
              <tr>
                <th></th>
                <th>Item</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Subtotal</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => {
                return (
                  <tr>
                    <td>
                      <img className="cart-img" src={product.src} />
                    </td>
                    <td>{product.productName}</td>
                    <td>${product.price}</td>
                    <td>
                      <div>
                        <button
                          onClick={() => decrementHandler(product)}
                          className="cart-icon"
                          type="button"
                        >
                          <FaMinus />
                        </button>
                        <span className="cart-quantity">
                          {product.quantity}
                        </span>
                        <button
                          onClick={() => incrementHandler(product)}
                          className="cart-icon"
                          type="button"
                        >
                          <FaPlus />
                        </button>
                      </div>
                    </td>
                    <td>${product.quantity * product.price}</td>
                    <td>
                      <button
                        className="cart-icon"
                        onClick={() => removeHandler(product)}
                      >
                        <BsTrash />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div className="buttons">
            <Link to="/products">
              <button className="cart-button">Continue Shopping</button>
            </Link>
            <button onClick={clearShoppingHandler} className="cart-button">
              Clear Shopping Cart
            </button>
          </div>
        </div>
        <div className="container-checkout">
          <div className="cart-checkout">
            <article>
              <h5>
                Subtotal : $
                <span>
                  {products.reduce((total, product) => {
                    return total + product.quantity * product.price;
                  }, 0)}
                </span>
              </h5>
              <p>
                Shipping Fee : $<span>5</span>
              </p>
              <hr />
              <h4>
                Order Total : $
                <span>
                  {products.reduce((total, product) => {
                    return total + product.quantity * product.price;
                  }, 5)}
                </span>
              </h4>
            </article>
            <Link to="/checkout">
              <button className="cart-button">PROCEED TO CHECKOUT</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
