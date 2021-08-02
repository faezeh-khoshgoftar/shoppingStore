import React from 'react';
import SwiftSlider from 'react-swift-slider';


const Slider=({data})=>{
    return (
      <SwiftSlider data={data} height={900} />
    );
}

export default Slider;