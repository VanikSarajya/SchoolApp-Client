import axios from 'axios';
require('dotenv').config();

export function getStudents(){
    return async (dispatch) => {
        const response = await axios.get(process.env.REACT_APP_SERVER_URL + '/admin/students');
        const {students} = response.data;
        dispatch({
            type: "GET_STUDENTS",
            students
        })
    }
}

export function getStudent(id){
    return async (dispatch) => {
        const response = await axios.get(process.env.REACT_APP_SERVER_URL + `/admin/students/${id}`);
        const {student} = response.data;

        dispatch({
            type: "GET_STUDENT",
            student
        })
    }
}

export function clearCurrentStudent(){
    return {
        type: "CLEAR_CURRENT_STUDENT"
    }
}

export function addStudent(firstName,lastName, classId){
    return async (dispatch) => {
        const response = await axios.post(process.env.REACT_APP_SERVER_URL + '/admin/students/add', {firstName,lastName,classId});
        const {message} =  response.data;
        dispatch({
            type: "ADD_STUDENT",
            message
        })
        dispatch(getStudents());
    }
}

export function deleteStudent(student) {
    return async dispatch => {
        const response = await axios.delete(process.env.REACT_APP_SERVER_URL + `/admin/students/${student.id}`);
        const {message} = response.data;
        dispatch({
            type: "DELETE_STUDENT",
            message
        })

        dispatch(getStudents());
    }
}

export function editStudent(id, firstName, lastName, classId){
    return async (dispatch) => {
        const response = await axios.put(process.env.REACT_APP_SERVER_URL + `/admin/students/edit/${id}`, {firstName, lastName, classId});
        const {message} = response.data;
        dispatch ({
            type: "EDIT_STUDENT",
            message
        })

        dispatch(getStudents());
    }
}