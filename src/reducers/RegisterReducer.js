const INITIAL_STATE = {
    user_id: '',
    name: '',
    hospital: '',
    errorRegister: ''
}

export default (state = INITIAL_STATE, action) => {
    if(action.type == 'USERID_CHANGED'){
        return {...state, user_id: action.payload}
    }
    if(action.type == 'NAME_CHANGED'){
        return {...state, name: action.payload}
    } 
    if (action.type == 'HOSPITAL_CHANGED'){
        return {...state, hospital: action.payload}
    }
    if (action.type == 'REGISTER_PACIENT_ERROR'){
        return {...state, errorRegister: action.payload }
    }
    if (action.type == 'REGISTER_CLEAR'){
        return {...state, user_id: '', name: '', hospital: '', errorRegister: ''}
    }
    return state;
}