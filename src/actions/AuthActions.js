import axios from 'axios'
import NavigationService from '../NavigationService'

const BASE_URL = 'http://globalbombas.com.br/prosel_carefy/Mobile'

export const changeEmail = (email) => {
    return {
        type: 'EMAIL_CHANGED',
        payload: email
    }
}

export const changePassword = (password) => {
    return {
        type: 'PASSWORD_CHANGED',
        payload: password
    }
}

function loginUserSuccess(dispatch) {
    return { type: 'LOGIN_USER_SUCCESS'}
    NavigationService.navigate('Main')
}

function loginUserError(error, dispatch) {
    return { type: 'LOGIN_USER_ERROR',  payload: error.message}
}

export function login(email, password) {
    return dispatch => {
        axios({ method: 'POST', url: `${BASE_URL}/login`, data: {email, password} })
            .then(value => loginUserSuccess(dispatch))
            .catch(error => loginUserError(error, dispatch))
    }
}
