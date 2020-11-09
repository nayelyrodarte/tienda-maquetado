import React from 'react';
import { makeStyles } from '@material-ui/styles';

const shortcutStyles = makeStyles({
  root: {
    width: '2em',
    margin: '0 1em',
  },
  biggerImg: {
    width: '3em',
  },
  biggestImg: {
    width: '5em',
  },
});

function Shortcuts() {
  const styles = shortcutStyles();
  return (
    <div>
      <img className={styles.root} src='Group383@2x.png' alt='mi cuenta' />
      <img
        className={styles.biggerImg}
        src='Group381@2x.png'
        alt='mis favoritos'
      />
      <img
        className={styles.biggestImg}
        src='Group377@2x.png'
        alt='cargar pedido masivo'
      />
      <img className={styles.root} src='Group375@2x.png' alt='mi carrito' />
    </div>
  );
}

export default Shortcuts;
