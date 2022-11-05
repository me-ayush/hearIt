import React, { useState } from "react";
import FormInput from "../InputField/FormInput";
import Form from "../Form/Form";
import SubmitButton from "./../Button/SubmitButton";
import Error from "./../Error/Error";
import { login } from "../../Services/authService";
import { Link, useNavigate } from "react-router-dom";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const navigate = useNavigate();

    const submitHandler = async (e) => {

        e.preventDefault();
        const data = {
            email,
            password,
        };
        setLoading(true);
        const response = await login(data);
        setLoading(false);
        if (response.status === false) {
            setTimeout(() => {
                toast.error(response.error, {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
            }, 2);
            return
        };

        toast.success("Login Successfully", {
            autoClose: 5000,
            onClose: () => { if (response.data.tokens) return navigate("/"); }
        });

    };

    if (loading) return <p>Loading...</p>;

    return (
        <div>

            <Form submitHandler={submitHandler}>
                <FormInput
                    id="email"
                    text="Email"
                    type="email"
                    placeholder="johndoe@gmail.com"
                    value={email}
                    changeHandler={setEmail}
                />
                <FormInput
                    id="password"
                    text="Password"
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    changeHandler={setPassword}
                />
                {error ? <Error message={error} /> : null}
                <SubmitButton type="submit" text="Login" />
            </Form>
            <ToastContainer/>

        </div>
    );
};

export default Login;
