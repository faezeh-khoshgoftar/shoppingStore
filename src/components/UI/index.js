import React from 'react';
import './UI.css';
//import components
import Filter from '../Filter';
import ProductItems from '../ProductItems';


const UI=({ displayCategory,setCategory,displayBrand, setBrand})=>{
    return(
        <div className="ui">
        <Filter setBrand={setBrand} setCategory={setCategory}/>
        <ProductItems displayBrand={displayBrand} displayCategory={displayCategory} />
        </div>
    )
}

export default UI; 



