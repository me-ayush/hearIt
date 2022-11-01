import styles from "./forminput.module.css";

const FormInput = ({ id, text, type, placeholder, value, changeHandler }) => {
    return (
        <>
            <label className={styles.label} id={id}>
                {text}
            </label>
            <input
                htmlFor={id}
                name={id}
                className={styles.input}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={(e) => changeHandler(e.target.value)}
            />
        </>
    );
};

export default FormInput;
