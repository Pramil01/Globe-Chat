import {Link} from 'react-router-dom';
import { useState } from 'react';
import { connect } from 'react-redux';
import { enteredName } from '../actions';

const Join = ({enteredName}) => {
    const [name,setName] = useState('');
    const validation = (e)=>{
        if(!name){
            e.preventDefault();
            alert('Please enter a name to continue');
        }
    }
        return (
        <div className='bg-dark text-white align-items-center' style={{height:'100vh'}}>
            <header className="text-center py-5">
                <h1>Welcome to Global Chat</h1>
            </header>
            <div className='container'>
                <form className="row text-sm-start text-center align-items-center justify-content-sm-start justify-content-center pt-5">
                <div className="mb-3 col-12">
                    <label htmlFor="inputName" className="form-label">Enter Your Name Here.</label>
                    <input type="text" vlaue={name} onChange={(e)=>setName(e.target.value)} placeholder="Your Name" className="form-control" id="inputName" aria-describedby="nameCondition"/>
                    <div id="nameCondition" className="form-text text-white">Name should be 20 characters or less.</div>
                </div>
                <Link onClick={(e)=>validation(e)} to={`/chat?name=${name}`}>
                    <button type="submit" className="btn btn-primary col-md-2 col-sm-3 col-6 mt-2" onClick={()=>enteredName(name)}>Submit</button>
                </Link>
                </form>
            </div>
        </div>
    )
}

export default connect(()=>{return {dummy:1}},{enteredName})(Join);