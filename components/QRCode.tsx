import EthereumQRPlugin from "ethereum-qr-code";
import { useEffect } from "react";
import styles from "../styles/QRCode.module.scss";

const QRCode = ({ address }) => {
  useEffect(() => {
    if (address) {
      const qr = new EthereumQRPlugin();

      qr.toCanvas(
        {
          to: address,
          value: 1,
        },
        {
          selector: `.${styles.qrcode}`,
          scale: 60,
        }
      );
    }
  }, []);

  return <div className={styles.qrcode} />;
};

export default QRCode;
