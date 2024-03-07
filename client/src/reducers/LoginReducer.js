
export function loginReducer (state, action ) {
    if (action.type === "loggedIn") {
     
        return {...state, loggedIn:true, user:action.user};
    } else if (action.type === "loggedOut") {
        
        return {...state, loggedIn:false, user:""};
    } 

}