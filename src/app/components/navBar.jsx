/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
function NavBar() {
    return (
        <>
            <ul className="nav">
                <li className="nav-item">
                    <Link
                        className="nav-link active"
                        aria-current="page"
                        to="/"
                    >
                        Main
                    </Link>
                </li>
                <li className="nav-item">
                    <Link
                        className="nav-link active"
                        aria-current="page"
                        to="/login"
                    >
                        Login
                    </Link>
                </li>
                <li className="nav-item">
                    <Link
                        className="nav-link active"
                        aria-current="page"
                        to="/users"
                    >
                        Users
                    </Link>
                </li>
            </ul>
        </>
    );
}

export default NavBar;
