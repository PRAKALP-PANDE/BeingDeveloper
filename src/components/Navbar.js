import React from 'react';

export default function Navbar() {
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
                    <a href="#careers">CAREERS</a>
                    <a href="#portfolio">VALUE OFFERING</a>
                    <a href="#contact">CONTACT</a>
                </nav>
            </header>
        </div>
    )
}
