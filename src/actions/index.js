export const increment = num => {
    return {
        type: 'INCREMENT',
        payLoad: num
    };
}; 

export const decrement = () => {
    return {
        type: 'DECREMENT'
    };
};

export const reset = () => {
    return {
        type: 'RESET'
    };
};

export const signIn = () => {
    return {
        type: 'SIGN_IN'
    };
}; 

export const signOut = () => {
    return {
        type: 'SIGN_OUT'
    };
}; 