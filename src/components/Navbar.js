import React from 'react';
import {Link} from 'react-router-dom'


const Navbar = ()=>{
    return(
        <nav className="nav navbar-expand navbar-dark bg-dark">
            <Link to="/" className="navbar-brand">ToDo</Link>
            <ul className="navbar navbar-nav ml-auto">
                <li className="nav-item">
                    <Link to="/" className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                    <Link to="/contact" className="nav-link">Contact</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;