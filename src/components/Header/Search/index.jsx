import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.module.css';

function Search(props) {
  const { search } = props;
  return (
    <>
      <div className={styles.search}>
        <form>
          <input type="search" placeholder="Buscar" className={styles.searchInput} />
        </form>
      </div>
    </>
  );
}

Search.propTypes = {
  search: PropTypes.string.isRequired,
};

export default Search;
