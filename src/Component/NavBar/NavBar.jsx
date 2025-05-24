import React from 'react'
import './NavBar.css'
import { NavLink } from 'react-router-dom'
const NavBar = () => {
    return (
        <header>
            <div class="container1">
                <NavLink href="#" class="logo">
                    <img src="" alt="logo" />
                </NavLink>
                <nav>
                    <i class="fas fa-bars toggle-menu"></i>
                    <ul>
                        <li><NavLink to="/home">Home</NavLink></li>
                        <li><NavLink to="/Contact">Contact</NavLink></li>
                        <li><NavLink to="/ForStudents">ForStudents</NavLink></li>
                        <li><NavLink to="/About">About</NavLink></li>
                    </ul>
                    <div class="form">
                        <button>Login</button>
                        <button>register</button>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default NavBar