import React from 'react';
import {
    Link
  } from "react-router-dom";

const Navbar = () => {
    return(
        <ul className="nav justify-content-center">
            <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link active" to="/movies">Movie</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/users">Users</Link>
            </li>
        </ul>
    );
};

export default Navbar;