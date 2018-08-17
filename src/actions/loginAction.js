import axios from "axios";
import { push } from "../../node_modules/react-router-redux";
require('dotenv').config();


export function login(email,password){
    return async (dispatch) => {
        const response = await axios.post(process.env.REACT_APP_SERVER_URL +"/admin/login",{email,password});
        const message = response.data.message;
        const token = response.data.token;

        localStorage.setItem('jwtToken', token);
        dispatch({
            type: "LOGIN",
            message
        })
        dispatch(authenticate(token));
    }
}

export function authenticate(token){
    return async (dispatch) => {
        const response = await axios.post(process.env.REACT_APP_SERVER_URL+"/admin/auth",{token});
        const {error, admin} = response.data;
        if(admin){
            dispatch({
                type: "AUTHENTICATE",
                admin,
                error
            })
            localStorage.setItem('user', admin.email);
            dispatch(push('/admin/classes'))
        }
    }
}

export function getUserData(token){
    return async (dispatch) => {
        const response = await axios.post(process.env.REACT_APP_SERVER_URL+"/admin/auth",{token});
        const {error, admin} = response.data;
        if(admin){
            dispatch({
                type: "GET_USER_DATA",
                admin,
                error
            })
        }
    }
}

export function logout(){
    localStorage.removeItem('jwtToken');
    localStorage.removeItem('user');
}