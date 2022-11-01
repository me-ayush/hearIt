import { useState } from "react";
import FormInput from "../InputField/FormInput";
import Form from "../Form/Form";
import SubmitButton from "./../Button/SubmitButton";
import Error from "./../Error/Error";
import { login } from "../../Services/authService";
import { Link, useNavigate } from "react-router-dom";

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
        if (response.status === false) return alert(response.error);
        if (response.data.tokens) return navigate("/");
    };

    if (loading) return <p>Loading...</p>;

    return (
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
    );
};

export default Login;
