import React from "react";
import { brand } from "../../data";

const Brand = ({ setBrand }) => {
  const brands = brand.getProductsBrand();

  const handleChange = (event) => {
    setBrand(event.target.value);
  };

  return (
    <select onChange={handleChange}>
      {brands.map((brand) => (
        <option key={brand} value={brand}>
          {brand}
        </option>
      ))}
    </select>
  );
};
export default Brand;
