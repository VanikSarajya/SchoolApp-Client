const initialState = {
    email: "",
    message: "",
    firstName: "",
    lastName: "",
}

export const loginReducer = (state = initialState, action) => {
    switch(action.type){
        case "LOGIN":{
            const {message} = action;
            state={
                ...state,
                message,
            }
            return state;
        }
        case "GET_USER_DATA":{
            const {error, admin} = action;
            const {firstName,lastName,email} = admin;
            state = {
                ...state,
                message: error,
                firstName,
                lastName,
                email,
            } 
            return state;  
        }
        case "AUTHENTICATE":{
            const {error, admin} = action;
            const {firstName,lastName,email} = admin;
            state = {
                ...state,
                message: error,
                firstName,
                lastName,
                email,
            } 
            return state;   
        }
        default: 
            return state;    
    }
}