import { useState } from "react";
import Form from "../Form/Form";
import FormInput from "../InputField/FormInput";
import SubmitButton from "./../Button/SubmitButton";

const PasswordForm = () => {
    const [email, setEmail] = useState("");

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
            <SubmitButton type="submit" text="Reset password"/>
        </Form>
    );
};

export default PasswordForm;
