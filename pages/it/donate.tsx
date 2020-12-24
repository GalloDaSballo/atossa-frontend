import React from "react";
import Head from "next/head"
import QRCode from "../../components/QRCode";
import styles from "../../styles/Donate.module.scss";
import DonateHero from "../../components/DonateHero";

const donate = () => {
  return (
    <div className={styles.donate}>
      <Head>
        <title>Fai una donazione in Ethereum ad Atossa</title>
      </Head>
      <DonateHero />
      <div className={styles.donationContainer}>
        <img src="../etherium-logo.png" alt="etherium" />
        <h1>Donazione</h1>
        <p>
          Fai una donazione, usa ESCLUSIVAMENTE, ETH, o tokens ERC-20.
        </p>
        <QRCode />
        <span>Indirizzo Ethereum</span>
      </div>
    </div>
  );
};

export default donate;
