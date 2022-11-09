import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import styles from "./footer.module.css";

const Footer = () => {
    return (
        <footer>
            <div className={styles.main_footer}>
                <div className={styles.container}>
                    <div className={styles.row_1}>
                        <div className={styles.col + " " + styles.col_logo}>
                            <h1>hearIt</h1>
                        </div>
                        <div className={styles.col + " " + styles.col_hearit}>
                            <h4>HEARIT</h4>
                            <ul>
                                <li>
                                    <Link to="/">Home</Link>
                                </li>
                                <li>
                                    <Link to="/">Premium</Link>
                                </li>
                                <li>
                                    <Link to="/">Features</Link>
                                </li>
                                <li>
                                    <Link to="/">About Us</Link>
                                </li>
                            </ul>
                        </div>
                        <div
                            className={
                                styles.col + " " + styles.col_communities
                            }
                        >
                            <h4>COMMUNITIES</h4>
                            <ul>
                                <li>
                                    <Link to="/">For Artists</Link>
                                </li>
                                <li>
                                    <Link to="/">Developers</Link>
                                </li>
                                <li>
                                    <Link to="/">Press</Link>
                                </li>
                            </ul>
                        </div>
                        <div
                            className={
                                styles.col + " " + styles.col_useful_links
                            }
                        >
                            <h4>USEFUL LINKS</h4>
                            <ul>
                                <li>
                                    <Link to="/">Help</Link>
                                </li>
                                <li>
                                    <Link to="/">FAQs</Link>
                                </li>
                                <li>
                                    <Link to="/">Contact Us</Link>
                                </li>
                            </ul>
                        </div>
                        <div className={styles.col}>
                            <h4>FOLLOW US</h4>
                            <div className={styles.social_links}>
                                <Link to="/">
                                    <FaFacebook />
                                </Link>
                                <Link to="/">
                                    <FaInstagram />
                                </Link>
                                <Link to="/">
                                    <FaTwitter />
                                </Link>
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
        </footer>
    );
};

export default Footer;
