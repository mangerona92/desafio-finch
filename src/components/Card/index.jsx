import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './index.module.css';
import { PRODUCT_STATUS } from '../../enum';

function Card({
  id, name, getStatus, value, isFavorite, setFavoriteProduct, productDescription, img,
}) {
  const handlerClick = () => {
    setFavoriteProduct(id);
  };

  const setStatusClass = () => {
    if (PRODUCT_STATUS.PROMOTION === getStatus()) {
      return styles.imageTagPromotion;
    }

    if (PRODUCT_STATUS.EXCLUSIVE === getStatus()) {
      return styles.imageTagExclusive;
    }
    return '';
  };
  return (
    <>
      <div className={styles.card}>
        <div className={styles.imageContainer}>
          <Link key={id} className={styles.linkCard} to={`/product-details/${id}`}>
            <img className={styles.imageProduct} src={img} alt="imagem fone" />
          </Link>
          <div className={setStatusClass()}>
            <span>
              { getStatus() }
            </span>
          </div>
        </div>
        <div className={styles.container}>
          <div className={styles.divValue}>
            <span>
              <b className={styles.textValue}>
                { value }
              </b>
            </span>
            <div className={styles.btnFavorites}>
              <label htmlFor={id} className={styles.switch}>
                <input id={id} onClick={handlerClick} type="checkbox" value={isFavorite} />
                <span className={`${styles.slider} ${styles.round}`} />
              </label>
              <span className={styles.textFavorites}>
                tornar favoritos
              </span>
            </div>
          </div>
          <h2 className={styles.productText}>
            { name }
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
  name: PropTypes.string.isRequired,
  getStatus: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  isFavorite: PropTypes.bool,
  setFavoriteProduct: PropTypes.func.isRequired,
  productDescription: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};

export default Card;
