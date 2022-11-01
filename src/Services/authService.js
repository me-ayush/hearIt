import axios from "axios";
import { clearItem, setItem } from "../Utils/LocalStorage";
import {
    URL,
    endpoints,
    ACCESS_TOKEN,
    REFRESH_TOKEN,
} from "./../Constants/index";

export const login = async (data) => {
    try {
        const response = await axios.post(URL + endpoints.auth.login, data);
        if (!response.data.tokens)
            return { status: false, error: response.data.error };
        setItem(ACCESS_TOKEN, response.data.tokens.accessToken);
        setItem(REFRESH_TOKEN, response.data.tokens.refreshToken);
        return { status: true, data: response.data };
    } catch (error) {
        return { status: false, error: error.message };
    }
};

export const signup = async (data) => {
    try {
        const response = await axios.post(URL + endpoints.auth.signup, data);
        console.log(response);
        if (!response.data.userDetails)
            return { status: false, error: response.data.error };
        return { status: true, data: response.data.userDetails };
    } catch (error) {
        return { status: false, error: error.message };
    }
};

export const logout = () => {
    clearItem(ACCESS_TOKEN);
    clearItem(REFRESH_TOKEN);
};
