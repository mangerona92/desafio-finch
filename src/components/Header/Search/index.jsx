import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { DebounceInput } from 'react-debounce-input';
import styles from './index.module.css';

function Search(props) {
  const { search } = props;
  const [input, setInput] = useState('');

  const onChangeValue = (evt) => {
    setInput(evt.target.value);
  };

  useEffect(() => {
    search(input);
  }, [input]);

  return (
    <>
      <div className={styles.search}>
        <form>
          <DebounceInput debounceTimeout={1000} onChange={onChangeValue} type="search" placeholder="Buscar" className={styles.searchInput} />
          { search }
        </form>
      </div>
    </>
  );
}

Search.propTypes = {
  search: PropTypes.func.isRequired,
};

export default Search;
