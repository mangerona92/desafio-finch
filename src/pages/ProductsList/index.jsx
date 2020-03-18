import React from 'react';
import styles from './index.module.css';
import Title from '../../components/Header/Title';
import Search from '../../components/Header/Search';
import Card from '../../components/Card';
import {
  PAGE_STATUS, PAGE_TITLE, PAGE_SUBTITLE, PAGE_DESCRIPTION, PAGE_VALUE, PAGE_FAVORITE, PAGE_PRODUCTSDESCRIPTION, PAGE_PRODUCT,
} from '../../enum';
import { useQuery } from '../../hooks';

function ProductsList() {
  const query = useQuery;
  const getTitle = () => PAGE_TITLE[query().get('query')] || PAGE_TITLE.all;
  const getSubTitle = () => PAGE_SUBTITLE[query().get('query')] || PAGE_SUBTITLE.all;
  const getDescription = () => PAGE_DESCRIPTION[query().get('query')] || PAGE_DESCRIPTION.all;
  const getStatus = () => PAGE_STATUS.status;
  const getValue = () => PAGE_VALUE.value;
  const getFavorite = () => PAGE_FAVORITE.favorite;
  const getProduct = () => PAGE_PRODUCT.product;
  const getProductDescription = () => PAGE_PRODUCTSDESCRIPTION.productDescription;
  return (
    <div>
      <div className={styles.productList}>
        <Title title={getTitle()} subTitle={getSubTitle()} description={getDescription()} />
        <Search />
      </div>
      <hr className={styles.hrStyle} />
      <div className={styles.containerProductsList}>
        <Card
          status={getStatus()}
          value={getValue()}
          favorite={getFavorite()}
          productDescription={getProductDescription()}
          product={getProduct()}
        />
      </div>
    </div>

  );
}

export default ProductsList;
