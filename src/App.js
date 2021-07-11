import React from 'react';
import { Route, Switch } from 'react-router';
import Home from './components/Home';
import ProductCard from './components/Product/ProductCard'
import Checkout from './components/Checkout';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" >
          <Home />
        </Route>
        <Route exact path="/category/:cid">
          <ProductCard />
        </Route>
        <Route exact path="/checkout">
          <Checkout/>
        </Route>
      </Switch>
      
    </div>
  );
}

export default App;
