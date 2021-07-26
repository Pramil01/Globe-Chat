const Header = ({name}) => {

    return (
        <div className="navbar navbar-expand-lg navbar-dark bg-dark pb-3 fixed-top">
        <div className="container-fluid px-5">
            <a href="/" className="navbar-brand">Global Chat</a>
            <span className="text-center text-white">{name}</span>

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#nav-items" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="navbar-collapse collapse" id="nav-items">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item"><a href="/" className="nav-link">Customize</a></li>
                    <li className="nav-item"><a href="/" className="nav-link">Meet the creator</a></li>
                </ul>
            </div>
        </div>
    </div>
    )
}

export default Header
