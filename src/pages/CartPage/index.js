import React, {Component} from "react";
import Cart from "../../components/Cart";
import {cartStore} from '../../redux'

class CartPage extends Component {
  state = {};

  componentDidMount() {
    this.setState({ products: cartStore.getState() });
    this.unsubscribe = cartStore.subscribe(() =>
      this.setState({ products: cartStore.getState() })
    );
  }
  
  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    return<Cart products={this.state.products} />
  }
}

export default CartPage ;
