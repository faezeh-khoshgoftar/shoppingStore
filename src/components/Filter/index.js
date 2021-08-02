import React from "react";
import "./Filter.css";
//import components
import ButtonCategories from "../ButtonCategories";
import Brand from "../Brand";

const Filter = ({ setCategory, setBrand }) => {
  return (
    <div className="filter">
      <div className="categories">
        <h5>Categories</h5>
        <ButtonCategories setCategory={setCategory} />
      </div>
      <div>
        <h5>Company</h5>
        <Brand setBrand={setBrand} />
      </div>
    </div>
  );
};

export default Filter;
