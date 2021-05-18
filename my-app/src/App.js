import React from 'react'
import Products from './Components/Products/products';
import ProductDetails from './Components/ProductDetails/productDetails';
import style from './app.module.css';
import {
  Switch,
  Route
} from "react-router-dom";

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addProduct, deleteProduct, editProduct, switchCurrProduct } from './Redux/Actions/actions';

const App = (props) => {
  return (
    <div className={style.app}>
      <Switch>
        <Route path="/details">
          <ProductDetails currProduct={props.currProduct} editProduct={props.editProduct} />
        </Route>
        <Route path="/">
          <Products {...props} />
        </Route>
      </Switch>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    products: state.products,
    currProduct: state.currProduct
  };
}

const mapActionsToProps = (dispatch) => {
  return {
    deleteProduct: bindActionCreators(deleteProduct, dispatch),
    addProduct: bindActionCreators(addProduct, dispatch),
    switchCurrProduct: bindActionCreators(switchCurrProduct, dispatch),
    editProduct: bindActionCreators(editProduct, dispatch)
  };
}

export default connect(mapStateToProps, mapActionsToProps)(App);


