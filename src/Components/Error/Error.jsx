import styles from "./error.module.css";

const Error = ({ message }) => {
    return (
        <p className={styles.error}>
            {message}
        </p>
    );
};

export default Error;
