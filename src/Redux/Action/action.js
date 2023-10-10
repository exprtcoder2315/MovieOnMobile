export const serverRequest = (payload) => {
    return {
        type: "SERVER_REQUEST",
        payload
    }
}

export const loginRequest = (payload) => {
    return {
        type: "LOGIN_REQUEST",
        payload
    }
};

export const signupRequest = (payload) => {
    return {
        type: "SIGNUP_REQUEST",
        payload
    }
}