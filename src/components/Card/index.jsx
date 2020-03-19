import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './index.module.css';

function Card({
  getStatus, value, setFavoriteProduct, product, productDescription, img,
}) {
  function handlerClick() {
    setFavoriteProduct(product.id);
  }
  return (
    <>
      <div className={styles.card}>
        <div className={styles.imageContainer}>
          <Link key={product.id} className={styles.linkCard} to={`/product-details/${product.id}`}>
            <img className={styles.imageProduct} src={img} alt="imagem fone" />
          </Link>
          <div className={styles.imageTag}>
            <span>
              { getStatus() }
            </span>
          </div>
        </div>
        <div className={styles.container}>
          <h4 className={styles.divValue}>
            <b className={styles.textValue}>
              { value }
            </b>
            <div className={styles.btnFavorites}>
              <label htmlFor={product.id} className={styles.switch}>
                <input id={product.id} onClick={handlerClick} type="checkbox" />
                <span className={`${styles.slider} ${styles.round}`} />
              </label>
              <span className={styles.textFavorites}>
                tornar favoritos
              </span>
            </div>
          </h4>
          <h2 className={styles.productText}>
            { product.nome }
          </h2>
          <div className={styles.textFavorites}>
            { productDescription }
          </div>
        </div>
      </div>
    </>
  );
}

Card.defaultProps = {
  isFavorite: false,
};

Card.propTypes = {
  id: PropTypes.number.isRequired,
  getStatus: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired,
  isFavorite: PropTypes.bool,
  setFavoriteProduct: PropTypes.func.isRequired,
  product: PropTypes.object.isRequired,
  productDescription: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};

export default Card;
