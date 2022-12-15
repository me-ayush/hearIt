import { useState } from "react";
import Form from "../Form/Form";
import FormInput from "../InputField/FormInput";
import SubmitButton from "./../Button/SubmitButton";
import ReCAPTCHA from "react-google-recaptcha";

const PasswordForm = () => {
    const [email, setEmail] = useState("");
    const [verified, setVerified] = useState("");

    const handleCaptcha = () => {
        setVerified(true);
    };

    return (
        <Form>
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
