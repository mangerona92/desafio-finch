import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.module.css';

function Title(props) {
  const { title, subTitle, description } = props;
  return (
    <>
      <div>
        <div className={styles.title}>
          <h2>
            { title }
          </h2>
          <h2 className={styles.subTitle}>
            -
            { subTitle }
          </h2>
        </div>
        <span className={styles.description}>
          { description }
        </span>
      </div>
    </>
  );
}

Title.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Title;
