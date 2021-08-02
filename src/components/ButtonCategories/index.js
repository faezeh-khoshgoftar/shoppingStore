import React from "react";
import "./ButtonCategories.css";
import { product_categories } from "../../data";

const ButtonCategories = ({ setCategory }) => {
  const productCategories = product_categories.getProductCategories();
  return (
    <>
      {productCategories.map((category) => (
        <button
          className="button-category"
          key={category}
          onClick={() => setCategory(category)}
        >
          {category}
        </button>
      ))}
    </>
  );
};
export default ButtonCategories;
