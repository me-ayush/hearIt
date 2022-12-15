import axios from "axios";
import Error from "../../Components/Error/Error";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { URL, endpoints } from "./../../Constants/index";
import styles from "./auth.module.css";

const AuthenticateUser = () => {
    const { token } = useParams();
    const navigate = useNavigate();

    const sendToken = async (token) => {
        const response = await axios.post(URL + endpoints.auth.verify, {
            token,
        });
        if (response.data.success) {
            navigate("/login");
        } else if (!response.data.success) {
            <Error message={response.data.error} />;
        }
    };

    useEffect(() => {
        sendToken(token);
    }, []);

    return (
        <div className={styles.message}>
            <h1>Verifying your account. Please Wait...</h1>
        </div>
    );
};

export default AuthenticateUser;
