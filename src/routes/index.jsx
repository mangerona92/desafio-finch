
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import styles from './index.module.css';

import {
  ProductsListPage,
  ProductsDetailsPage,
} from '../pages';

function Routes() {
  return (
    <div className={styles.container}>
      <Switch>
        <Route path="/">
          <ProductsListPage />
        </Route>
        <Route path="/product-details">
          <ProductsDetailsPage />
        </Route>
      </Switch>
    </div>
  );
}

export default Routes;
