import EthereumQRPlugin from "ethereum-qr-code";
import { useEffect } from "react";
import styles from "../styles/QRCode.module.scss";

const QRCode = () => {
  useEffect(() => {
    const qr = new EthereumQRPlugin();

    qr.toCanvas(
      {
        to: process.env.NEXT_PUBLIC_ETHERIUM_ADDRESS,
        value: 1,
      },
      {
        selector: `.${styles.qrcode}`,
        scale: 60,
      }
    );
  }, []);

  return <div className={styles.qrcode} />;
};

export default QRCode;
