import { useRouter } from "next/router";
import React from "react";
import styles from "../styles/BackBtn.module.scss";

const BackBtn = ({ className }) => {
  const router = useRouter();
  return (
    <button
      className={`${styles.backBtn} ${className ? className : ""}`}
      onClick={() => router.back()}
    >
      <div className={styles.arrow}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="10.399"
          height="7.519"
          viewBox="0 0 10.399 7.519"
        >
          <g>
            <g>
              <path
                fill="#fff"
                d="M15.345 135.33l-3.168-3.153a.606.606 0 0 0-.856.86l2.127 2.117H5.73a.606.606 0 0 0 0 1.213h7.718l-2.127 2.117a.606.606 0 0 0 .856.86l3.168-3.153a.607.607 0 0 0 0-.861z"
                transform="rotate(180 7.761 69.76) translate(0 132) translate(0 -132)"
              />
            </g>
          </g>
        </svg>
      </div>
      <span>Back</span>
    </button>
  );
};

export default BackBtn;
