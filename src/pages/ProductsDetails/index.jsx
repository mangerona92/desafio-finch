import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import styles from './index.module.css';
import returnicon from '../../assets/returnicon.png';
import phonelarge from '../../assets/phonelarge.png';
import Search from '../../components/Header/Search';

function ProductsDetails() {
  const params = useParams();
  const products = useSelector((state) => state.product.products);
  const [product, setProduct] = useState();
  useEffect(() => {
    setProduct(products.find((p) => p.id === parseInt(params.productId, 10)));
  }, [products]);
  return (
    <>
      <div>
        <div className={styles.productDetail}>
          <div>
            <div className={styles.product}>
              <h2>
                product
              </h2>
              <h2 className={styles.price}>
                -
                R$ 198,00
              </h2>
              <div className={styles.btnFavorites}>
                <label htmlFor="favorite" className={styles.switch}>
                  <input id="favorite" type="checkbox" />
                  <span className={`${styles.slider} ${styles.round}`} />
                </label>
                <span className={styles.textFavorites}>
                  tornar favorito
                </span>
              </div>
            </div>
            <span className={styles.description}>
              Aparelho intra auricular de som em alta definição sem fio para os viciados de plantão
            </span>
          </div>
          <div>
            <div>
              <button type="submit" className={styles.btnReturn}>
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
                <img className={styles.imageProduct} src={phonelarge} alt="imagem fone" />
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
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
            <li>
              Lorem sdgfagdfgfdsagdfsgdfsg dfsg dfsgfdsgfdsgdfs gdfs gdfsgdfsg dfs
            </li>
            <li>
              Lorem sdgfagdfgfdsagdfsgdfsg dfsg dfsgfdsgfdsgdfs gdfs gdfsgdfsg dfs
            </li>
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
