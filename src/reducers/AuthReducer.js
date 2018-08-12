const INITIAL_STATE = {
    email: '',
    password: '',
    errorLogin: ''
}

export default (state = INITIAL_STATE, action) => {
    if(action.type == 'EMAIL_CHANGED'){
        return {...state, email: action.payload}
    } 
    if (action.type == 'PASSWORD_CHANGED'){
        return {...state, password: action.payload}
    }
    if (action.type == 'LOGIN_USER_ERROR'){
        return {...state, errorLogin: action.payload }
    }
    return state;
}