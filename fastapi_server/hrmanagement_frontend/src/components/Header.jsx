import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './header.css';

function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm px-4">
            <div className="container-fluid">
                <Link className="navbar-brand fw-bold text-info" to="/">
                    HR Management
                </Link>
                <button 
                    className="navbar-toggler" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navbarNav" 
                    aria-controls="navbarNav" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav align-items-lg-center gap-2">
                        <li className="nav-item">
                            <Link className="nav-link px-3" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link px-3" to="/about">About Us</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link px-3" to="/contact">Contact Us</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="btn btn-outline-light btn-sm px-3 ms-lg-2" to="/login">Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="btn btn-info btn-sm px-3 ms-lg-2 text-dark fw-semibold" to="/register">Register</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Header;