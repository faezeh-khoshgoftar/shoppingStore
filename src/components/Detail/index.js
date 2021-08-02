import React, { useEffect, useState } from "react";
import "./Detail.css";
import { useParams } from "react-router";
import { dataProducts } from "../../data";
import { cartStore, addToCart } from "../../redux";
import PageHero from "../PageHero";
import { Link } from "react-router-dom";

const Detail = () => {
  const [stateData, setData] = useState({});
  const { sku } = useParams();

  useEffect(() => {
    const uniqueData = dataProducts.getProductsBySKU(sku);
    setData(uniqueData);
    const unsubscribe = cartStore.subscribe(() => {
      console.log(cartStore.getState());
    });

    return () => {
      unsubscribe();
    };
  });

  const addToCartHandler = () => {
    cartStore.dispatch(addToCart(stateData));
  };

  const data = stateData;
  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <PageHero product title={data.productName} />
      <div className="detail">
        <Link to="/products">
          <button className="detail-button">Back To Products</button>
        </Link>
        <div className="detail-container">
          <section className="img-container">
            <img alt={data.productName} className="detail-img" src={data.src} />
          </section>
          <section className="detail-Specifications">
            <h2>{data.productName}</h2>
            <strong>${data.price}</strong>
            <p>
              <span>SKU : </span>
              {data.sku}
            </p>
            <p>
              <span>Brand : </span>
              {data.brand}
            </p>
            <hr />
            <Link to="/cart">
              <button onClick={addToCartHandler} className="detail-button">
                ADD TO CART
              </button>
            </Link>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Detail;
