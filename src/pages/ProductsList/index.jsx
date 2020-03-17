import React from 'react';
import styles from './index.module.css';
import Title from '../../components/Header/Title';
import { PAGE_TITLE, PAGE_SUBTITLE, PAGE_DESCRIPTION } from '../../enum';
import { useQuery } from '../../hooks';

function ProductsList() {
  const query = useQuery;
  const getTitle = () => PAGE_TITLE[query().get('query')] || PAGE_TITLE.all;
  const getSubTitle = () => PAGE_SUBTITLE[query().get('query')] || PAGE_SUBTITLE.all;
  const getDescription = () => PAGE_DESCRIPTION[query().get('query')] || PAGE_DESCRIPTION.all;
  return (
    <div className={styles.productList}>
      <Title title={getTitle()} subTitle={getSubTitle()} description={getDescription()} />
    </div>
  );
}

export default ProductsList;
