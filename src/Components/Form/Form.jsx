import styles from "./form.module.css";

const Form = ({ submitHandler, children }) => {
    return (
        <form onSubmit={submitHandler}>
            <div className={styles.input__container}>{children}</div>
        </form>
    );
};

export default Form;
