import axios from 'axios';
require('dotenv').config();

export function getClasses(){
    return async (dispatch) => {
        const response = await axios.get(process.env.REACT_APP_SERVER_URL + '/admin/classes');
        const {classes} = await response.data;
        dispatch({
            type: "GET_CLASSES",
            classes
        })
    }
}

export function getClass(id){
    return async (dispatch) => {
        const response = await axios.get(process.env.REACT_APP_SERVER_URL+ `/admin/classes/${id}`);
        const {clas} = response.data;

        dispatch({
            type: 'GET_CLASS',
            clas
        })
    }
}

export function clearCurrentClass(){
    return {
        type: "CLEAR_CURRENT_CLASS"
    }
}

export function deleteClass(clas) {
    return async dispatch => {
        const response = await axios.delete(process.env.REACT_APP_SERVER_URL + `/admin/classes/${clas.id}`);
        const {message} = await response.data;
        dispatch({
            type: "DELETE_CLASS",
            message
        })
        dispatch(getClasses())
    }
}

export function addClass(name, teacherId){
    return async (dispatch) => {
        const response = await axios.post(process.env.REACT_APP_SERVER_URL + '/admin/classes/add', {name, teacherId});
        const {message} = await response.data;
        dispatch({
            type: "ADD_CLASS",
            message,
        })
        dispatch(getClasses());

    }
}

export function editClass(id, name, teacherId){
    return async (dispatch) => {
        const response = await axios.put(process.env.REACT_APP_SERVER_URL + `/admin/classes/edit/${id}`, {name,teacherId});
        const {message} = await response.data;
        dispatch ({
            type: "EDIT_CLASS",
            message
        })

        dispatch(getClasses());
    }
}
