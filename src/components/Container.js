import React from 'react';
import Head from 'next/head';

function Container(props) {
  return (
    <div>
      <Head>
        <title>Aionic</title>
      </Head>
      {props.children}
    </div>
  );
}

export default Container;
