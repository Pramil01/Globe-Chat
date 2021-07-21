import { combineReducers } from "redux";

const enteredNameReducer = (enteredName='',action)=>{
    if(action.type === 'NAME_ENTERED'){
        return action.payload;
    }
    return enteredName;
}
const addMessageReducer = (messages=[],action)=>{
    if(action.type === 'ADD_MESSAGE'){
        return [...messages,action.payload];
    }
    return messages;
}



export default combineReducers({
    enteredName : enteredNameReducer,
    messages :addMessageReducer
});