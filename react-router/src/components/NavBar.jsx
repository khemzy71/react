import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/blog">Blog</NavLink>
                    </li>
                    <li>
                        <NavLink to="/events">Events</NavLink>
                    </li>
                    <li>
                        <NavLink to="/interest">Interest</NavLink>
                    </li>
                    <li>
                        <NavLink to="/faq">FAQ</NavLink>
                    </li>
                    <li>
                        <NavLink to="/quotes">Quotes</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default NavBar;
