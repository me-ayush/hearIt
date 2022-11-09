import { Link } from "react-router-dom";
import styles from "./landing.module.css";
import listening from "./../../Assets/Images/listening.svg";

const Landing = () => {
    return (
        <div className={styles.landing}>
            <div className={styles.container}>
                <section className={styles.welcome}>
                    <img src={listening} alt="" />
                    <div className={styles.welcome__content}>
                        <h1>Welcome to hearIt</h1>
                        <p>
                            A one stop solution for all audio content, explore
                            different audio genres. <br /> stream podcasts short
                            audio clips and many more things
                        </p>
                        <Link to="/login">Explore Now</Link>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Landing;
