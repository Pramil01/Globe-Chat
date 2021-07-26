import "../styleSheets/ActiveUsers.css";

const ActiveUsers = ({users}) => {
    return (
        <div className="dropdown">
            <button className="btn text-white dropdown-toggle" type="button" id="AllUsers" data-bs-toggle="dropdown" aria-expanded="false" style={{border:'none',outline:'none'}}>
                Active Users
            </button>
            <ul className="dropdown-menu" aria-labelledby="AllUsers">
                {users.map((user,i)=><li key={i}>{user.name}</li>)}
            </ul>
        </div>
//   <div className="accordion fixed-top" id="Active-Users" style={{top:'10vh'}}>
//      <div className="accordion-item">
//           <h2 className="accordion-header" id="Heading">
//             <button className="accordion-button text-white collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#Users" aria-expanded="false" aria-controls="collapseTwo">
//               Active Users
//             </button>
//           </h2>
//           <div id="Users" className="accordion-collapse collapse" aria-labelledby="Heading" data-bs-parent="#Active-Users">
//             <div className="accordion-body">
//               {users.map((user,i)=><li key={i}>{user.name}</li>)}
//             </div>
//           </div>
//     </div>
// </div>
    )
}

export default ActiveUsers
