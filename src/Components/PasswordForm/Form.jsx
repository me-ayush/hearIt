import { useState } from "react";
import Form from "../Form/Form";
import FormInput from "../InputField/FormInput";
import SubmitButton from "./../Button/SubmitButton";
import ReCAPTCHA from "react-google-recaptcha";
import { useEffect } from "react";
import axios from "axios";
import { endpoints } from "../../Constants";
import styles from "./form.module.css";
import { URL } from './../../Constants/index.js';

const PasswordForm = () => {
    const [email, setEmail] = useState("");
    const [verified, setVerified] = useState("");
    const [message, setMessage] = useState("");

    const handleCaptcha = () => {
        setVerified(true);
    };

    const sendEmail = async (e, email) => {
        e.preventDefault();
        const response = await axios.post(URL + endpoints.auth.forgotPassword, {
            email,
        });
        console.log(response);
        if (response.data.success) {
            setMessage(response.data.message);
        } else {
            setMessage(response.data.error);
        }
    };

    return message.length > 0 ? (
        <div className={styles.message}>
            <p>{message}</p>
        </div>
    ) : (
        <Form submitHandler={sendEmail}>
            <FormInput
                id="forgot-password"
                text="email"
                type="text"
                placeholder="Enter your email"
                value={email}
                changeHandler={setEmail}
            />
            <div className="container">
                <ReCAPTCHA
                    sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
                    onChange={handleCaptcha}
                />
            </div>
            <SubmitButton
                type="submit"
                text="Reset password"
                disabled={!verified}
            />
        </Form>
    );
};

export default PasswordForm;
