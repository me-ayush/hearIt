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
import { ToastContainer, toast } from "react-toastify";

const PasswordForm = () => {
    const [email, setEmail] = useState("");
    const [verified, setVerified] = useState(process.env.REACT_APP_IS_DEV && process.env.REACT_APP_IS_DEV ? true : false);
    const [message, setMessage] = useState("");

    const handleCaptcha = () => {
        setVerified(true);
    };

    const sendEmail = async (e) => {
        e.preventDefault();
        const response = await axios.post(URL + endpoints.auth.forgotPassword, {
            email,
        });
        if (response.data.success) {
            toast.success("Recovery Mail Sent", {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
            setMessage(response.data.message);
        } else {
            setVerified(process.env.REACT_APP_IS_DEV && process.env.REACT_APP_IS_DEV ? true : false)
            // setMessage(response.data.error);
            toast.error(response.data.error, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        }
    };

    return message.length > 0 ? (
        <>
            <div className={styles.message}>
                <p>{message}</p>
            </div>
            <ToastContainer />
        </>
    ) : (
        <>
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
                    {
                        process.env.REACT_APP_IS_DEV && process.env.REACT_APP_IS_DEV ? true :
                            <ReCAPTCHA
                                sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
                                onChange={handleCaptcha}
                            />
                    }
                </div>
                <SubmitButton
                    type="submit"
                    text="Reset password"
                    disabled={!verified}
                />
            </Form>
            <ToastContainer />
        </>
    );
};

export default PasswordForm;
