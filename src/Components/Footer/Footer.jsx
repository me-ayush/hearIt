import React from "react";
import styles from "./footer.module.css";

import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className={styles.main_footer}>
      <div className={styles.container}>
        <div className={styles.row_1}>
          <div className={styles.col + ' ' + styles.col_logo}>
            <h1>hearIt</h1>
          </div>
          <div className={styles.col + ' ' + styles.col_hearit}>
            <h4>HEARIT</h4>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/">Premium</a></li>
              <li><a href="/">Features</a></li>
              <li><a href="/">About Us</a></li>
            </ul>
          </div>
          <div className={styles.col + ' ' + styles.col_communities}>
            <h4>COMMUNITIES</h4>
            <ul>
              <li><a href="/">For Artists</a></li>
              <li><a href="/">Developers</a></li>
              <li><a href="/">Press</a></li>
            </ul>
          </div>
          <div className={styles.col + ' ' + styles.col_useful_links}>
            <h4>USEFUL LINKS</h4>
            <ul>
              <li><a href="/">Help</a></li>
              <li><a href="/">FAQs</a></li>
              <li><a href="/">Contact Us</a></li>
            </ul>
          </div>
          <div className={styles.col}>
            <h4>FOLLOW US</h4>
            <div className={styles.social_links}>
              <a href="/"><FaFacebook /></a>
              <a href="/"><FaInstagram /></a>
              <a href="/"><FaTwitter /></a>
            </div>
          </div>
        </div>
        <div className={styles.row_2}>
          <div className={styles.copyright}>
            <p>&copy; hearIt, 2022</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;