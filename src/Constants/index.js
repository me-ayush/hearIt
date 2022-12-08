export const URL = window.location.href.indexOf("hearit-backend") > -1 ? "https://hearit-backend.vercel.app" : "http://localhost:5000";
console.log("Location of backend: ", URL)
export const endpoints = {
    auth: {
        login: "/auth/login",
        signup: "/auth/signup",
    },
};

export const ACCESS_TOKEN = "accessToken";
export const REFRESH_TOKEN = "refreshToken";
export const THEME = "theme";
