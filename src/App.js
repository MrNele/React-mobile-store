import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Cart from './components/Cart';
import Default from './components/Default';
import Details from './components/Details';
import Navbar from './components/Navbar';
import Product from './components/Product';
import ProductList from './components/ProductList';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar></Navbar>
      </React.Fragment>
    );
  }
}

export default App;
