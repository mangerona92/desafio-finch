import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation, Link } from 'react-router-dom';
import { setProductsList, setFilteredProductsList } from '../../store/ducks/product';
import { requesterService } from '../../services';
import styles from './index.module.css';
import Title from '../../components/Header/Title';
import Search from '../../components/Header/Search';
import Card from '../../components/Card';
import {
  PAGE_TITLE,
  PAGE_SUBTITLE,
  PAGE_DESCRIPTION,
} from '../../enum';

export const useQuery = () => new URLSearchParams(useLocation().search);

function ProductsList() {
  const dispatch = useDispatch();
  const query = useQuery();
  const products = useSelector((state) => state.product.products);
  const filteredProducts = useSelector((state) => state.product.filteredProducts);
  const pageTitle = PAGE_TITLE[query.get('query')] || PAGE_TITLE.all;
  const pageSubTitle = PAGE_SUBTITLE[query.get('query')] || PAGE_SUBTITLE.all;
  const pageDescription = PAGE_DESCRIPTION[query.get('query')] || PAGE_DESCRIPTION.all;

  const getStatus = (product) => {
    return product.promocao || product.exclusivo;
  };

  const setFavoriteProduct = (productId) => {
    console.log(productId);
    // const pdt = products.map((p) => {
    //   if (p.id === productId) {
    //     return { ...p, isFavorite: !p.isFavorite };
    //   }
    //   return p;
    // });

    // dispatch(setProductsList(pdt));
  };

  useEffect(() => {
    if (!products.length) {
      requesterService.get('/v2/5d3b57023000005500a2a0a6')
        .then((res) => {
          const pdt = res.produtos.map((p) => ({ ...p, isFavorite: false }));
          dispatch(setProductsList(pdt));
          dispatch(setFilteredProductsList(pdt));
        })
        .catch((error) => {
          // TODO: Fazer toast
          console.log(error);
        });
    }
  }, []);

  useEffect(() => {
    switch (query.get('query')) {
      case 'exclusives':
        dispatch(setFilteredProductsList(products.filter((p) => p.exclusivo)));
        break;
      case 'promotion':
        dispatch(setFilteredProductsList(products.filter((p) => p.promocao)));
        break;
      case 'favorites':
        dispatch(setFilteredProductsList(products.filter((p) => p.isFavorite)));
        break;
      default:
        dispatch(setFilteredProductsList(products));
        break;
    }
  }, [pageTitle]);

  return (
    <div>
      <div className={styles.productList}>
        <Title
          title={pageTitle}
          subTitle={pageSubTitle}
          description={pageDescription}
        />
        <Search />
      </div>
      <hr className={styles.hrStyle} />
      <div className={styles.containerProductsList}>
        {products.map((product) => (
          <Link key={product.id} className={styles.linkCard} to={`/product-details/${product.id}`}>
            <Card
              id={product.id}
              getStatus={() => getStatus(product)}
              value={product.valor}
              setFavoriteProduct={(productId) => setFavoriteProduct(productId)}
              isFavorite={product.isFavorite}
              productDescription={product.decricaoCurta}
              product={product.nome}
              img={product.imagem}
            />
          </Link>
        ))}
      </div>
    </div>

  );
}

export default ProductsList;
