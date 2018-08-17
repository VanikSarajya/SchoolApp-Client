const initialState = {
    courses: [],
    message: "",
    currentCourse: null
}


export const courseReducer = (state = initialState, action) => {
    switch(action.type){
        case "GET_COURSES":{
            const {courses} = action;

            state = {
                ...state,
                courses
            }
            return state;
        }
        case "GET_COURSE":{
            const {message,currentCourse} = action;

            state = {
                ...state,
                message,
                currentCourse
            }
            return state;
        }
        case "CLEAR_CURRENT_COURSE":{
            const currentCourse = null;

            state = {
                ...state,
                currentCourse
            }
            return state;
        }
        case "ADD_COURSE":{
            const {message} = action;
            state = {
                ...state,
                message
            }
            return state;
        }
        case "EDIT_COURSE": {
            const {message} = action;
            state = {
                ...state,
                message
            }
            return state;
        }
        case "DELETE_COURSE":{
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