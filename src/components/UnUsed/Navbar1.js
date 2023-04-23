import React from 'react';
import './style.css';

export default function Navbar1() {
    return (
        <div>
            {/*Navigation */}
            <header className="header">
                <a href="#" className="logo">BeingDeveloper</a>

                <i className='bx bx-menu' id="menu-icon"></i>

                <nav className="navbar">
                    <a href="#home" className="active">HOME</a>
                    <a href="#about">ABOUT</a>
                    <a href="#services">SERVICES</a>
                    <a href="#portfolio">CAREERS</a>
                    <a href="#contact">CONTACT</a>
                </nav>
            </header>
        </div>
    )
}
