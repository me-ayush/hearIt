import { Link } from "react-router-dom";
import LoginForm from "../../Components/Login/Login";
import styles from "./auth.module.css";

const Login = () => {
    return (
        <main className={styles.auth}>
            <div className={styles.auth__header}>
                <h1>Login</h1>
                <p>Login to your account</p>
            </div>
            <div className={styles.auth__form}>
                <LoginForm />
            </div>
            <div className={styles.auth__footer}>
                <p>
                    Forgot Password?
                    <Link to="/forgot-password"> click here</Link>
                </p>

                <p>
                    Don't have an account? <Link to="/signup">create one</Link>
                </p>
            </div>
        </main>
    );
};

export default Login;
