export const setItem = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
};

export const getItem = (key) => {
    const result = JSON.parse(localStorage.getItem(key)) || "";
    return result;
};

export const clearItem = (key) => {
    localStorage.removeItem(key);
};

export const clearStorage = () => {
    localStorage.clear();
};
