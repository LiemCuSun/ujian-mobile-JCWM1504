import asyncStorage from '@react-native-async-storage/async-storage'
import Axios from 'axios'

export const login = (data) => {
    return async (dispatch) => {
        try {
            await asyncStorage.setItem('data', data)

            dispatch({
                type: "LOGIN",
                payload: data
            })
        }
        catch (err) {
            console.log(err)
        }
    }
}

export const keepLogin = () => {
    return async (dispatch) => {
        try {
            const username= await asyncStorage.getItem('data')
            console.log('keep login terpanggil')

            dispatch({
                type: "LOGIN",
                payload: username
            })
        }
        catch (err) {
            console.log(err)
        }
    }
}

export const register = (data) => {
    return async (dispatch) => {
        try {
            console.log(data)

            dispatch({
                type: 'LOGIN',
                payload: data
            })

        }
        catch (err) {
            console.log(err)
        }
    }
}

export const logout = () => {
    return async (dispatch) => {
        try {
            await asyncStorage.removeItem('data')
            dispatch({ type: 'LOG_OUT' })
        }
        catch (err) {
            console.log(err)
        }

    }
}