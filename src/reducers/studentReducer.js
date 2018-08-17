const initialState = {
    students: [],
    message: "",
    currentStudent: null
}

export const studentReducer = (state=initialState, action) => {
    switch(action.type){
        case "GET_STUDENTS": {
            const {students} = action;

            state = {
                ...state,
                students
            }
            return state;
        }
        case "GET_STUDENT":{
            const {student} = action;

            state = {
                ...state,
                currentStudent: student
            }
            return state;
        }
        case "CLEAR_CURRENT_STUDENT":{
            const currentStudent = null;

            state = {
                ...state,
                currentStudent
            }
            return state;
        }
        case "ADD_STUDENT": {
            const {message} = action;
            state = {
                ...state,
                message
            }
            return state;
        }
        case "DELETE_STUDENT":{
            const {message} = action;

            state ={
                ...state,
                message,
            }
            return state;
        }
        case "EDIT_STUDENT":{
            const {message} = action;
            state = {
                ...state,
                message
            }
            return state;
        }
        default:
            return state;
    }
}
