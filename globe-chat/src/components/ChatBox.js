import {useState} from 'react';
import "../styleSheets/ChatBox.css";

const ChatBox = ({message:{user,text},name}) => {

    const [checkCurrentUser,setCheckCurrentUser] = useState(false);

    const trimName = name.trim().toLowerCase();

    if(user === trimName){
        setCheckCurrentUser(true);
    }

    console.log(user,text);
    return (
        <div>
             <div className={`message${checkCurrentUser ? 'User':'Sender'}`}>
             <p>{name}<br/>{text}</p>
             </div>
        </div>
    )
}

export default ChatBox
