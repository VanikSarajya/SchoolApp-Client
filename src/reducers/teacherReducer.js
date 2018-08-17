const teacherInitialState = {
    teachers : [],
    freeTeachers:[],
    message : "",
    currentTeacher: null,
}

export const teacherReducer = (state = teacherInitialState, action) => {
    switch(action.type){
        case "GET_TEACHERS":{
            const {teachers} = action;
            state = {
                ...state,
                teachers
            }
            return state;
        }
        case "GET_TEACHER":{
            const {teacher} = action;
            state = {
                ...state,
                currentTeacher: teacher
            }
            return state;
        }
        case "GET_FREE_TEACHERS":{
            const {freeTeachers} = action;
            state = {
                ...state,
                freeTeachers
            }
            return state;
        }
        case "CLEAR_CURRENT_TEACHER": {
            const currentTeacher = null;
            state = {
                ...state,
                currentTeacher
            }
            return state;
        }
        case "EDIT_TEACHER":{
            const {message} = action;
            state = {
                ...state,
                message
            }
            return state;
        }
        case "DELETE_TEACHER":{
            const deleteMessage = action.message;            
            state ={
                ...state,
                message:deleteMessage,
            }
            return state;
        }
        case "ADD_TEACHER":{
            const {message} = action;
    
            state ={
                ...state,
                message,
            }
            return state;
        }    
        default:
            return state;    
    }

}