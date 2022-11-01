import styles from "./submitbtn.module.css";

const Button = ({ type, text }) => {
    return (
        <button className={styles.button} type={type}>
            {text}
        </button>
    );
};

export default Button;
