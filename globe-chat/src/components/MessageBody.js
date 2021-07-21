import ChatBox from "./ChatBox";
import '../styleSheets/Message.css';
import { connect } from "react-redux";


const MessageBody = ({messages,name}) => {
    
    return (
        <div style={{height:"100vh",overflow:"scroll"}} className="messageBody">
            {messages.map((message,i)=><div key={i}><ChatBox message={message} name={name}/></div>)}
        </div>
    )
}
const mapStateToProps =(state)=>{
    return{
       messages :state.messages
    }
}

export default connect(mapStateToProps)(MessageBody);
