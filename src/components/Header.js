import React from 'react';
import SearchBar from '../components/SearchBar';
import Shortcuts from '../components/Shortcuts';
import { makeStyles } from '@material-ui/styles';

const logoStyles = makeStyles({
  root: {},
});

function Header() {
  const logo = logoStyles();
  return (
    <div className={logo.root}>
      <img src='chaman-morado.png' alt='chaman-morado-logo' />
      <SearchBar />
      <Shortcuts />
    </div>
  );
}

export default Header;
