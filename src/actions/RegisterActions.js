import axios from 'axios'

const BASE_URL = 'http://globalbombas.com.br/prosel_carefy/Mobile'

export const changeUserId = (user_id) => {
    return {
        type: 'USERID_CHANGED',
        payload: user_id
    }
}

export const changeName = (name) => {
    return {
        type: 'NAME_CHANGED',
        payload: name
    }
}

export const changeHospital = (hospital) => {
    return {
        type: 'HOSPITAL_CHANGED',
        payload: hospital
    }
}

const registerPacientSuccess = (dispatch) => {
    dispatch ({ type: 'REGISTER_PACIENT_SUCCESS'})
    console.log('to aqui')
}

const registerPacientError = (error, dispatch) => {
    dispatch ({ type: 'REGISTER_PACIENT_ERROR',  payload: error.message})
}

const clear = () => {
    return {type: 'REGISTER_CLEAR'}
}

export function register(name, hospital, user_id) {
    return dispatch => {
        axios.post(`${BASE_URL}/mobile_add_patient`, {name, hospital, user_id})
            .then(value => registerPacientSuccess(dispatch))
            .then(resp => clear())
            .catch(error => registerPacientError(error, dispatch))
    }
}