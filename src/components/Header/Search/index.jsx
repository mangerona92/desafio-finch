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
          { search }
        </form>
      </div>
    </>
  );
}

Search.defaultProps = {
  search: '',
};

Search.propTypes = {
  search: PropTypes.string,
};

export default Search;
