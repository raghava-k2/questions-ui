export const login = (state = '', action) => {
    const { type, data } = action;
    switch (type) {
        case 'LOGIN_REDIRECT_URL':
            return data.redirectPath;
        default:
            return state;
    }
}