export const getJWT = () => {
    return localStorage.getItem('JWT-Token');
};

export const getUID = () => {
    return localStorage.getItem('uid');
};