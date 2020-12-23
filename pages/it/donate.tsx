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
        <QRCode address="0x29D7d1dd5B6f9C864d9db560D72a247c178aE86B" />
        <span>My Ethereum Wallet</span>
      </div>
    </div>
  );
};

export default donate;
