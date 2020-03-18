import React from 'react';
import styles from './index.module.css';
import Search from '../../components/Header/Search';

function ProductsDetails() {
  return (
    <>
      <div>
        <div className={styles.productList}>
          <div>
            <div className={styles.title}>
              <h2>
                Fone Bluetooth XPTO
              </h2>
              <h2 className={styles.subTitle}>
                -
                R$ 198,00
              </h2>
              <div className={styles.btnFavorites}>
                <label for="favorite" className={styles.switch}>
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
          <Search />
        </div>
        <hr className={styles.hrStyle} />
      </div>
    </>
  );
}

export default ProductsDetails;
