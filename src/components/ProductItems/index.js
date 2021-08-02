import React, { useState, useEffect } from "react";
import "./ProductItems.css";
import { dataProducts } from "../../data";
import ProductItem from "../ProductItem";

const ProductItems = ({ displayCategory, displayBrand }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const products = dataProducts.getProducts();
    setProducts(products);
  }, []);

  return (
    <div className="productItems">
      {products
        .filter(
          ({ category, brand }) =>
            (displayCategory === category || displayCategory === "All") &&
            (displayBrand === brand || displayBrand === "All")
        )
        .map((product) => (
          <ProductItem product={product} />
        ))}
    </div>
  );
};

export default ProductItems;
