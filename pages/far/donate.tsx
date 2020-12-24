import React from "react";
import QRCode from "../../components/QRCode";
import styles from "../../styles/Donate.module.scss";
import DonateHero from "../../components/DonateHero";

const donate = () => {
  return (
    <div className={styles.donate}>
      <DonateHero />
      <div className={styles.donationContainer}>
        <img src="../etherium-logo.png" alt="etherium" />
        <h1>Donation</h1>
        <p>
          Support my poems and donate Ethereum or ERC20 Only. Thanks in advance!
        </p>
        <QRCode />
        <span>My Ethereum Wallet</span>
      </div>
    </div>
  );
};

export default donate;
