import React from "react";
//import components
import Slider from "../../components/Slider";
//import images
import image1 from '../../assets/images/img16.jpeg';
import image2 from '../../assets/images/img14.jpeg';
import image3 from '../../assets/images/img20.jpg'; 


const data =  [
  {'id':'1','src':image1},
  {'id':'2','src':image2},
  {'id':'3','src':image3}
];


const Home = () => {
  return <Slider data={data}/>
};

export default Home;