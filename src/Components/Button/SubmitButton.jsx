import styles from "./submitbtn.module.css";

const Button = ({ type, text, disabled }) => {
    return (
        <button className={styles.button} disabled={disabled} type={type}>
            {text}
        </button>
    );
};

export default Button;
