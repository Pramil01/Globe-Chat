import "../styleSheets/ChatBox.css";

const ChatBox = ({message:{user,text},name}) => {

    let checkCurrentUser = false;

    const trimName = name.trim();

    if(user === trimName){
        checkCurrentUser = true;
    }

    if(user === 'admin'){
        return (
            <div className="messageAdmin">
             <div className='innerAdmin'>
             <p>{text}</p>
             </div>
        </div>
        )
    }

    else if(checkCurrentUser){
        return (
            <div className="messageUser">
             <div className='innerUser'>
             <p><span style={{fontWeight:'bold',marginBottom:'3px'}}>{user}</span><br/>{text}</p>
             </div>
        </div>
        )
    }
    else{
    return (
        <div className="messageSender">
             <div className='innerSender'>
             <p><span style={{fontWeight:'bold',marginBottom:'3px'}}>{user}</span><br/>{text}</p>
             </div>
        </div>
    )
    }
}

export default ChatBox
