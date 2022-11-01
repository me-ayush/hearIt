import { Link } from "react-router-dom";
import SignupForm from "../../Components/Signup/Signup";
import styles from "./auth.module.css";

const Signup = () => {

    return (
        <main className={styles.auth}>
            <div className={styles.auth__header}>
                <h1>Signup</h1>
                <p>Signup to see what's happening</p>
            </div>
            <div className={styles.auth__form}>
                <SignupForm />
            </div>
            <div className={styles.auth__footer}>
                <p>
                    Already have an account? <Link to="/login">Login here</Link>
                </p>
            </div>
        </main>
    );
};

export default Signup;
