import React from "react";
import "./ProductItem.css";
import { Link } from "react-router-dom";

const ProductItem = ({ product }) => {
  return (
    <div key={product.id} className="productItem">
      <div>
        <Link to={`products/${product.sku}`}>
          <img
            className="productItem-img"
            alt={product.productName}
            src={product.src}
          />
        </Link>
      </div>
      <div className="productItem-detail">
        <h6>{product.productName}</h6>
        <p>${product.price}</p>
      </div>
    </div>
  );
};

export default ProductItem;
