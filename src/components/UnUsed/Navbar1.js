import React, { useState, useEffect } from 'react';

const Navbar1 = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('');

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('section');
            const navLinks = document.querySelectorAll('header nav a');

            sections.forEach((section) => {
                const top = window.scrollY;
                const offset = section.offsetTop - 150;
                const height = section.offsetHeight;
                const id = section.getAttribute('id');

                if (top >= offset && top < offset + height) {
                    navLinks.forEach((link) => {
                        link.classList.remove('active');
                        document.querySelector(`header nav a[href*=${id}]`).classList.add('active');
                    });
                    setActiveSection(id);
                }
            });
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className="header">
            <a href="#" className="logo">
                Being<span>Developer</span>
            </a>
            <i
                id="menu-icon"
                className={isMenuOpen ? 'bx bx-x' : 'bx bx-menu'}
                onClick={handleMenuToggle}
            ></i>
            <nav className={`navbar ${isMenuOpen ? 'active' : ''}`}>
                <a href="#home" className={activeSection === 'home' ? 'active' : ''}>
                    HOME
                </a>
                <a href="#about" className={activeSection === 'about' ? 'active' : ''}>
                    ABOUT
                </a>
                <a
                    href="#services"
                    className={activeSection === 'services' ? 'active' : ''}
                >
                    SERVICES
                </a>
                <a
                    href="#careers"
                    className={activeSection === 'careers' ? 'active' : ''}
                >
                    CAREERS
                </a>
                <a href="#value" className={activeSection === 'value' ? 'active' : ''}>
                    VALUE OFFERING
                </a>
                <a
                    href="#contact"
                    className={activeSection === 'contact' ? 'active' : ''}
                >
                    CONTACT
                </a>
            </nav>
        </header>
    );
};

export default Navbar1;
