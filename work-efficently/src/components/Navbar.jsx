import React from 'react'
import "../styles/Navbar.scss"
import { useSelector } from 'react-redux';

export default function Navbar() {

    const isVisible = useSelector((state) => state.navbar.isVisible);
    console.log(isVisible)
    if (!isVisible) return null;

    return (
        <nav className="navbar">
            <div className="navbar-logo">Sproutify</div>
            <ul className="navbar-links">
                <li><a href="/">Home</a></li>
                <li><a href="/store">Store</a></li>
                <li><a href="/pomodoro">Pomodoro</a></li>
                <li><a href="/profile">Profile</a></li>
            </ul>
        </nav>
    )
}
