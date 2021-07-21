export const enteredName = (name)=>{
return {
    type:'NAME_ENTERED',
    payload:name
}
}

export const addMessage = (message)=>{
    return {
        type:'ADD_MESSAGE',
        payload:message
    }
}