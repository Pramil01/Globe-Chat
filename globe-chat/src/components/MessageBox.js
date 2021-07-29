import "../styleSheets/MessageBox.css";
const MessageBox = ({message,setMessage,sendMessage,typer}) => {

    return (
        <section className="message-box bg-dark text-light p-1">
        <div className="container">
        <span className="typing text-white" style={{color:'white'}}>{typer}</span>
        <div className="d-flex justify-content-around align-items-center">
            <div className="input-group news-input">
                <input type="text" className="form-control"
                value={message}
                onChange={({ target: { value } }) => setMessage(value)}
                placeholder="Write Your Messages Here"
                onKeyPress={(e)=>e.key==='Enter'&& sendMessage(e) }
                />
            </div>
            <i className="bi bi-telegram ps-2 pb-1"
            onClick={(e)=> sendMessage(e)}
            >
            </i>
        </div>
        </div>
    </section>
    )
}

export default MessageBox
