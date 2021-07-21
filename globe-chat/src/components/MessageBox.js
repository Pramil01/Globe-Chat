const MessageBox = ({message,setMessage,sendMessage}) => {

    return (
        <section className="bg-dark text-light p-1" style={style}>
        <div className="container">
        <div className="d-flex justify-content-around align-items-center">
            <div className="input-group news-input">
                <input type="text" className="form-control"
                value={message}
                onChange={({ target: { value } }) => setMessage(value)}
                placeholder="Write Your Messages Here"
                onKeyPress={(e)=>e.key==='Enter'&& sendMessage(e) }
                />
            </div>
            <i className="bi bi-telegram ps-2 pb-1" style={{fontSize:"40px"}}
            onClick={(e)=> sendMessage(e)}
            >
            </i>
        </div>
        </div>
    </section>
    )
}
const style = {
    position : "fixed",
    bottom: "0px",
    width:"100%"
}


export default MessageBox
