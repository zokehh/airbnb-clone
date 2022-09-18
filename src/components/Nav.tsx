import React from 'react'

export default function Nav() {
    return (
        <nav className='nav'>
            <a href="#"><img className='logo-img' src='./images/logo.png' /></a>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
    )
}