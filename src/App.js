import React from 'react';
import { Route, Switch, useParams } from 'react-router';
import Home from './components/Home';
import Checkout from './components/Checkout';
import Navigation from './components/Navigation'
import Products from './components/Product/Products';

function App() {

  // const {cid} = useParams();

  return (
    <div>
      <Navigation />

      <Switch>
        <Route exact path="/" >
          <Home />
        </Route>
        <Route exact path="/product/:cid">
          <Products />
        </Route>
        <Route exact path="/checkout">
          <Checkout/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
