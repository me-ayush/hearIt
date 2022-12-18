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
import { Preloader } from "../PreLoader/preloader";

const PasswordForm = () => {
    const [email, setEmail] = useState("");
    const [verified, setVerified] = useState(process.env.REACT_APP_IS_DEV ? true : false);
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const handleCaptcha = () => {
        setVerified(true);
    };

    function showErrorMessage(message) {
        setVerified(process.env.REACT_APP_IS_DEV ? true : false)
        toast.error(message, {
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
    function showSuccessMessage(message) {
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
        setMessage("Recovery mail sent, please check your mailbox, also check the spam tab");
    }

    const sendEmail = async (e) => {
        e.preventDefault();
        setLoading(true);
        var response
        try {
            response = verified ? await axios.post(URL + endpoints.auth.forgotPassword, { email, }) : { data : {success: false, error: "please check reCaptcha button" }}
        } catch {
            showErrorMessage(response && response.data.error ? response.data.error : "Something Went Wrong")
        } finally {
            setLoading(false);
        }
        if (response.data.success) {
            showSuccessMessage()
        }else{
            showErrorMessage(response.data.error)
        }
    };

    if (loading) return <Preloader />;

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
                        process.env.REACT_APP_IS_DEV ? true :
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
