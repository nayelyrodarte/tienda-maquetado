import React from 'react';

import { makeStyles } from '@material-ui/styles';

const inputStyles = makeStyles({
  root: {
    border: 'none',
    borderBottom: 'solid 1px black',
    display: 'inline',
  },
});

function SearchBar() {
  const styles = inputStyles();
  return (
    <div>
      <input
        className={styles.root}
        type='text'
        placeholder='Buscar producto...'
      />
      <img src='search-icon.svg' alt='search' />
    </div>
  );
}

export default SearchBar;
