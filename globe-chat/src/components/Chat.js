import Header from "./Header";
import MessageBox from "./MessageBox";
import MessageBody from "./MessageBody";
import { useEffect,useState } from "react";
import { connect } from "react-redux";
import io from 'socket.io-client';

let socket;

const Chat = ({name}) => {
    const [message,setMessage] = useState('');
    const [messages,setMessages] = useState([]);
    const [users,setUsers] = useState([]);
    const ENDPOINT = 'localhost:5000';

    useEffect(()=>{
        socket =io(ENDPOINT);
        askUser();
        socket.emit('join',{name},()=>{
        })
        return ()=>{
            socket.emit('disconnect');
            socket.off();
        }
    },[name,ENDPOINT]);

    useEffect(()=>{
        socket.on('message',(message)=>{
            setMessages([...messages,message]) ;
            console.log(message);
        });
        return ()=>{
            socket.off();
        }
    },[messages]);

    useEffect(()=>{
        socket.on('allUsers',names=>setUsers(names));
    },[users]);

    const sendMessage = (event)=>{
        event.preventDefault();
        if(message){
            socket.emit('sendMessage',message,()=>setMessage(''))
        }
    }
    const askUser =()=>socket.emit('askUser');
    
    return (
        <div style={{backgroundColor:"#414a4c"}}>
            <Header name={name} users={users} />
            <MessageBody name={name} messages={messages}/>
            <MessageBox message={message} setMessage={setMessage} sendMessage={sendMessage}/>
        </div>
    )
}

const mapStateToProps =(state)=>{
    return{
        name : state.enteredName
    }
}


export default connect(mapStateToProps)(Chat)
