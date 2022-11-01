import PasswordForm from "../../Components/PasswordForm/Form.jsx";
import styles from "./auth.module.css";

const ForgotPassword = () => {
    return (
        <div className={styles.auth}>
            <PasswordForm />
        </div>
    );
};

export default ForgotPassword;
