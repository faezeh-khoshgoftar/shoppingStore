import React from "react";
import { Route , Switch , BrowserRouter as Router,Redirect } from "react-router-dom";
// import components
import PageHOC from "../components/PageHOC";
import Home from '../pages/Home';
import AboutPage from '../pages/AboutPage';
import ProductsPage from '../pages/ProductsPage';
import DetailPage from '../pages/DetailPage';
import CartPage from "../pages/CartPage";
import CheckoutPage from "../pages/CkeckoutPage";
/* import Login from "../components/Login";
import Signup from "../components/Signup"; */




const Routes=()=>{
  return(
    <Router>
      <PageHOC>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={AboutPage} />
        <Route exact path="/products" component={ProductsPage} />
        <Route path="/products/:sku" component={DetailPage} />
        <Route path="/cart" component={CartPage} />
        <Route path="/checkout" component={CheckoutPage} />
        {/* <Route path="/" render={() => {return <Redirect to="log-in" />;}}/> 
        <Route path="/log-in" component={Login} />
        <Route path="/sign-up" component={Signup} />  */}
      </Switch>
      </PageHOC>
    </Router>
  )
}

export default Routes;