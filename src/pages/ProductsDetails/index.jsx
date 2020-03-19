import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { setProductsList, setFilteredProductsList } from '../../store/ducks/product';
import { requesterService } from '../../services';
import styles from './index.module.css';
import returnicon from '../../assets/returnicon.png';
import Search from '../../components/Header/Search';

function ProductsDetails() {
  function handlerClick() {
    setFavoriteProduct(product.id);
  }
  const dispatch = useDispatch();
  const params = useParams();
  const products = useSelector((state) => state.product.products);
  const [product, setProduct] = useState({});
  useEffect(() => {
    if (!products.length) {
      requesterService.get('/v2/5d3b57023000005500a2a0a6')
        .then((res) => {
          const pdt = res.produtos.map((p) => ({ ...p, isFavorite: false }));
          dispatch(setProductsList(pdt));
          dispatch(setFilteredProductsList(pdt));
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, []);
  const setFavoriteProduct = (productId) => {
    const pdt = products.map((p) => {
      if (p.id === productId) {
        return { ...p, isFavorite: !p.isFavorite };
      }
      return p;
    });
    dispatch(setProductsList(pdt));
  };
  useEffect(() => {
    const test = products.find((p) => p.id === parseInt(params.productId, 10)) || {};
    console.log(test, products);
    setProduct(test);
  }, [products]);
  return (
    <>
      <div>
        <div className={styles.productDetail}>
          <div>
            <div className={styles.product}>
              <h2>
                {product.nome}
              </h2>
              <h2 className={styles.price}>
                -
                R$
                {product.valor}
              </h2>
              <div className={styles.btnFavorites}>
                <label htmlFor={product.id} className={styles.switch}>
                  <input id={product.id} onClick={handlerClick} type="checkbox" />
                  <span className={`${styles.slider} ${styles.round}`} />
                </label>
                <span className={styles.textFavorites}>
                  tornar favorito
                </span>
              </div>
            </div>
            <span className={styles.description}>
              {product.decricaoCurta}
            </span>
          </div>
          <div className={styles.contLeft}>
            <div className={styles.btnReturnDiv}>
              <button onClick={() => window.history.back()} type="submit" className={styles.btnReturn}>
                <img className={styles.test} src={returnicon} alt="icone de retorno" />
              </button>
            </div>
            <Search />
          </div>
        </div>
        <hr className={styles.hrStyle} />
        <div className={styles.contentDetail}>
          <div className={styles.card}>
            <div>
              <div className={styles.imageContainer}>
                <img className={styles.imageProduct} src={product.imagem} alt="imagem do produto" />
                <div className={styles.imageTag}>
                  <span>
                    Promoção
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.textDetailProduct}>
            <h2>
              Detalhes Do Produto
            </h2>
            <span>
              {product.descricaoLonga}
            </span>
          </div>
        </div>
        <div className={styles.contentToken}>
          <h2>
            Ficha Técnica
          </h2>
        </div>
        <hr className={styles.hrStyle} />
        <div className={styles.contentListToken}>
          <div className={styles.listToken}>
            <li>
              Lorem sdgfagdfgfdsagdfsgdfsg dfsg dfsgfdsgfdsgdfs gdfs gdfsgdfsg dfs
            </li>
            <li>
              Lorem sdgfagdfgfdsagdfsgdfsg dfsg dfsgfdsgfdsgdfs gdfs gdfsgdfsg dfs
            </li>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductsDetails;
