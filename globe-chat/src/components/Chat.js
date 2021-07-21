import Header from "./Header";
import MessageBox from "./MessageBox";
import MessageBody from "./MessageBody";
import {addMessage} from "../actions"
import { useEffect,useState } from "react";
import { connect } from "react-redux";
import io from 'socket.io-client';

let socket;

const Chat = ({name,addMessage}) => {
    const [message,setMessage] = useState('');
    const ENDPOINT = 'localhost:5000';

    useEffect(()=>{
        socket =io(ENDPOINT);
        socket.emit('join',{name},()=>{
        })
        return ()=>{
            socket.disconnect();
            socket.off();
        }
    },[name]);

    useEffect(()=>{
        socket.on('message',(message)=>{
            addMessage(message)  
            console.log(message);
        });
        return ()=>{
            socket.off();
        }
    },[]);

    const sendMessage = (event)=>{
        event.preventDefault();
        if(message){
            socket.emit('sendMessage',message,()=>setMessage(''))
        }
    }
    
    return (
        <div style={{backgroundColor:"#414a4c"}}>
            <Header/>
            <MessageBody name={name}/>
            <MessageBox message={message} setMessage={setMessage} sendMessage={sendMessage}/>
        </div>
    )
}

const mapStateToProps =(state)=>{
    return{
        name : state.enteredName
    }
}


export default connect(mapStateToProps,{addMessage})(Chat)
