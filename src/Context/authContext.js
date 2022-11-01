import { useEffect } from "react";
import { useState, createContext } from "react";
import { ACCESS_TOKEN } from "../Constants";
import { getItem } from "../Utils/LocalStorage";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState(getItem(ACCESS_TOKEN));
    
    useEffect(() => {
        const auth = getItem(ACCESS_TOKEN);
        setAuth(auth);
    });

    return (
        <AuthContext.Provider value={{ auth }}>{children}</AuthContext.Provider>
    );
};

export default AuthContext;
