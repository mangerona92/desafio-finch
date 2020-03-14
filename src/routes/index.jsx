
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import {
  ProductsListPage,
  ProductsDetailsPage,
} from '../pages';

function Routes() {
  return (
    <Switch>
      <Route path="/">
        <ProductsListPage />
      </Route>
      <Route path="/product-details">
        <ProductsDetailsPage />
      </Route>
    </Switch>
  );
}

export default Routes;
