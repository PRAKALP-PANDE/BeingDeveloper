import React from 'react';
import './style.css';

export default function Footer() {
    return (
        <div>
            {/* Footer */}
            <footer className="footer">
                <div className="footer-text">
                    <p>Copyright &copy; 2023 by BeingDeveloper | All Right Reserved</p>
                </div>

                <div className="footer-iconTop">
                    <a href="#home"><i className='bx bx-up-arrow-alt' ></i></a>
                </div>
            </footer>
        </div>
    )
}
