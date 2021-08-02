 import React,{useState} from 'react';
import UI from '../UI';
import PageHero from '../PageHero';

  
const Products=()=>{
    const[displayCategory,setDisplayCategory]=useState("All");
    const[displayBrand,setDisplayBrand]=useState("All");

      const setCategory=(category)=>{
        setDisplayCategory(category)
      }

      const setBrand=(brand)=>{
        setDisplayBrand(brand)
      }

    return (
      <>
      <PageHero title="Products"/>
      <UI displayBrand={displayBrand} setBrand={setBrand} setCategory={setCategory} displayCategory={displayCategory} />
      </>
    )   
}

export default Products; 