import { combineReducers } from "redux";

const enteredNameReducer = (enteredName='',action)=>{
    if(action.type === 'NAME_ENTERED'){
        return action.payload;
    }
    return enteredName;
}



export default combineReducers({
    enteredName : enteredNameReducer
});