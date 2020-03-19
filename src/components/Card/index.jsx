import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.module.css';

function Card(props) {
  const {
    id, getStatus, value, isFavorite, setFavoriteProduct, product, productDescription, img,
  } = props;
  return (
    <>
      <div className={styles.card}>
        <div className={styles.imageContainer}>
          <img className={styles.imageProduct} src={img} alt="imagem fone" />
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
              <label htmlFor="favorite" className={styles.switch}>
                <input id="favorite" onClick={setFavoriteProduct(id)} type="checkbox" />
                <span className={`${styles.slider} ${styles.round}`} />
              </label>
              <span className={styles.textFavorites}>
                { isFavorite }
              </span>
            </div>
          </h4>
          <h2 className={styles.productText}>
            { product }
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
  product: PropTypes.string.isRequired,
  productDescription: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};

export default Card;
