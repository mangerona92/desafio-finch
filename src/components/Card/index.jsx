import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.module.css';
import phone from '../../assets/phone.png';
import favorite from '../../assets/favorite.png';

function Card(props) {
  const { card } = props;
  return (
    <>
      <div className={styles.card}>
        <img src={phone} alt="imagem fone" />
        <div className={styles.container}>
          <h4 className={styles.marginText}>
            <b className={styles.colorFont}>
              R$ 198,00
            </b>
            <div className={styles.btnFavorites}>
              <label for="favorite" className={styles.switch}>
                <input id="favorite" type="checkbox" />
                <span className={styles.slider} />
              </label>
              <span className={styles.textFavorites}> tornar favorito</span>
            </div>
          </h4>
          <h2 className={styles.productText}>Fone Bluetooth XPTO</h2>
          <div className={styles.textFavorites}>
            Aparelho intra auricular de som em alta definição sem fio para os viciados de plantãoa asdfsdaf sdafsdafdsafsadfsda
          </div>
        </div>
      </div>
    </>
  );
}

Card.propTypes = {
  card: PropTypes.string.isRequired,
};

export default Card;
