import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.module.css';
import phone from '../../assets/phone.png';

function Card(props) {
  const { value, favorite, product, productDescription } = props;
  return (
    <>
      <div className={styles.card}>
        <img src={phone} alt="imagem fone" />
        <div className={styles.container}>
          <h4 className={styles.divValue}>
            <b className={styles.textValue}>
              { value }
            </b>
            <div className={styles.btnFavorites}>
              <label for="favorite" className={styles.switch}>
                <input id="favorite" type="checkbox" />
                <span className={`${styles.slider} ${styles.round}`} />
              </label>
              <span className={styles.textFavorites}>
                { favorite }
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

Card.propTypes = {
  value: PropTypes.string.isRequired,
  favorite: PropTypes.string.isRequired,
  product: PropTypes.string.isRequired,
  productDescription: PropTypes.string.isRequired,
};

export default Card;
