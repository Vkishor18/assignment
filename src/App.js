import React from 'react';
import { Route, Switch} from 'react-router';
import Home from './pages/Home';
import Checkout from './pages/Checkout';
import Navigation from './components/Navigation'
import ProductPage from './pages/ProductPage';
import { CartProvider } from './context/cart.Context';
import products from './Database/Product.json';

function App() {

  return (
    <CartProvider>
      <Navigation />
      <Switch>
        <Route exact path="/" >
          <Home />
        </Route>
        <Route exact path="/product/:cid">
          <ProductPage />
        </Route>
        <Route exact path="/checkout">
          <Checkout />
        </Route>
      </Switch>
    </CartProvider>
  );
}

export default App;
