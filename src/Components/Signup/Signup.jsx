import { useState } from "react";
import FormInput from "../InputField/FormInput";
import Form from "./../Form/Form";
import SubmitButton from "./../Button/SubmitButton";
import Error from "./../Error/Error";
import { signup } from "../../Services/authService";
import { useNavigate } from "react-router-dom";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signup = () => {
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            name,
            username,
            email,
            password,
        };
        setLoading(true);
        const response = await signup(data);
        setLoading(false);
        if (!response.status) {
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
        if (response.data) return navigate("/login");
    };

    return (
        <div>
            <Form submitHandler={handleSubmit}>
                <FormInput
                    id="name"
                    text="Name"
                    type="text"
                    placeholder="John Doe"
                    value={name}
                    changeHandler={setName}
                />
                <FormInput
                    id="username"
                    text="Username"
                    type="text"
                    placeholder="itsmeJohn@123"
                    value={username}
                    changeHandler={setUsername}
                />
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
                <FormInput
                    id="confirmpassword"
                    text="Confirm Password"
                    type="password"
                    placeholder="Confirm your password"
                    value={confirmPassword}
                    changeHandler={setConfirmPassword}
                />
                {error ? <Error message="password not valid" /> : null}
                <SubmitButton type="submit" text="Signup" />
            </Form>

            <ToastContainer />
        </div>
    );
};

export default Signup;
