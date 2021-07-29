const Header = ({name,users}) => {

    return (
        <div className="navbar navbar-expand-lg navbar-dark bg-dark pb-3 fixed-top">
        <div className="container-fluid px-5">
            <a className="navbar-brand" href="/">Globe-Chat</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
                <li className="nav-item text-white">
                {name}
                </li>
            </ul>
                <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                <a className="nav-link" href="/">Customize</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="https://www.linkedin.com/in/pramil-kesarwani-10b374214" rel="noreferrer" target="_blank">Meet The Creator</a>
                </li>
                <span className="nav-item dropdown">
                <li className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Active Users
                </li>
                <ul className="dropdown-menu text-center" aria-labelledby="navbarDropdownMenuLink">
                  {users.map((user,i)=><li key={i}  className="nav-item">{user.name}</li>)}
                </ul>
                </span>
            </ul>
            </div>
        </div>
    </div>
    )
}

export default Header
