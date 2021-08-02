import React, { Fragment } from "react";
import './index.css';
import PropTypes from "prop-types";
import Header from "../Header";
import Footer from '../Footer';


const PageHOC = ({ children }) =>{
  return (
    <Fragment>
      <Header />
      <main className="main">
          {children}
      </main>
      <Footer/>
    </Fragment>
  );
};


PageHOC.propTypes = {
  children: PropTypes.any
};


export default PageHOC; 

