const initialState = {
    classes: [],
    message: "",
    currentClass: null
}

export const classReducer  = (state = initialState, action) => {
    switch(action.type){
        case "GET_CLASSES":{
            const {classes} = action;

            state = {
                ...state,
                classes
            }
            return state;
        }
        case "GET_CLASS": {
            const {clas} = action;
            state = {
                ...state,
                currentClass: clas
            }
            return state
        }
        case "CLEAR_CURRENT_CLASS":{
            const currentClass = null;

            state = {
                ...state,
                currentClass
            }
            return state;
        }
        case "DELETE_CLASS":{
            const deleteMessage = action.message;            
            state ={
                ...state,
                message:deleteMessage,
            }
            return state;
        }
        case "ADD_CLASS":{
            const addMessage = action.message;
            state ={
                ...state,
                message: addMessage,
            }
            return state;
        }
        case "EDIT_CLASS":{
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