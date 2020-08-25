import React from 'react';
import Head from 'next/head';
import Landing from '../components/landing'
import styles from '../styles/Home.module.css'
import UnderLanding from '../components/underlanding'

export default function Index() {
  return (
  <>
    <Head>
      <title>Weston Bailey</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div className={styles.main}>
      <Landing />

      <UnderLanding />
    </div>
  </>   
  );
}
