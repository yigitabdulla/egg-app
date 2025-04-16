import React from 'react'
import "../styles/Navbar.scss"
export default function Navbar() {
    return (
        <nav class="navbar">
            <div class="navbar__logo">MyApp</div>
            <ul class="navbar__links">
                <li><a href="#">Home</a></li>
                <li><a href="#">Store</a></li>
                <li><a href="#">Pomodoro</a></li>
                <li><a href="#">Profile</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
    )
}
