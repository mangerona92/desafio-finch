import React from 'react';
import { Link } from 'react-router-dom';
import styles from './index.module.css';
import box from '../../assets/box.png';
import supplies from '../../assets/supplies.png';
import gift from '../../assets/gift.png';
import recommended from '../../assets/recommended.png';
import logofinch from '../../assets/logofinch.png';
import codelogo from '../../assets/code.png';

const Menu = () => (
  <div className={styles.menuContainer}>
    <aside className={styles.aside}>
      <div className={styles.menuList}>
        <div className={styles.menuItem}>
          <Link className={styles.linkMenu} to="/">
            <img src={codelogo} alt="codelogo" className={styles.iconMenu} />
          </Link>
        </div>
        <hr className={styles.text} />
        <div className={styles.menuItem}>
          <Link className={styles.linkMenu} to="/">
            <img src={supplies} alt="supplies" className={styles.iconMenu} />
            <p className={styles.textMenu}>Todos</p>
          </Link>
        </div>
        <hr className={styles.text} />
        <div className={styles.menuItem}>
          <Link className={styles.linkMenu} to="/">
            <img src={box} alt="box" className={styles.iconMenu} />
            <p className={styles.textMenu}>Favoritos</p>
          </Link>
        </div>
        <hr className={styles.text} />
        <div className={styles.menuItem}>
          <Link className={styles.linkMenu} to="/">
            <img src={gift} alt="gift-box" className={styles.iconMenu} />
            <p className={styles.textMenu}>Promoção</p>
          </Link>
        </div>
        <hr className={styles.text} />
        <div className={styles.menuItem}>
          <Link className={styles.linkMenu} to="/">
            <img src={recommended} alt="recommended" className={styles.iconMenu} />
            <p className={styles.textMenu}>Favoritos</p>
          </Link>
        </div>
      </div>
      <div className={styles.iconLogoFooter}>
        <img src={logofinch} alt="logofinch" />
      </div>
    </aside>
  </div>
);

export default Menu;
