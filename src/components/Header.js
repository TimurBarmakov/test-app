import React, { useState } from 'react';
import './Header.css';
import Logo from '../assets/images/logo.svg';  
import CloseIcon from '../assets/images/icon-menu-close.svg';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="header">
            <div className="container">
                <img src={Logo} alt="Логотип" />
                <div className='headerNavigation'>
                    {isOpen && (
                        <div className="overlay" onClick={toggleMenu}></div>
                    )}
                    <ul className={`headerNavigationMenu ${isOpen ? 'open' : ''}`}>
                        <li>Home</li>
                        <li>New</li>
                        <li>Popular</li>
                        <li>Trending</li>
                        <li>Categories</li>
                    </ul>
                    <div className="mobileImageContainer" onClick={toggleMenu}>
                        <svg width="100%" height="100%" viewBox="0 0 40 17" xmlns="http://www.w3.org/2000/svg">
                            <g fill="#00001A" fill-rule="evenodd">
                                <path className="line top" d="M0 0h40v3H0z"/>
                                <path className="line middle" d="M0 7h40v3H0z"/>
                                <path className="line bottom" d="M0 14h40v3H0z"/>
                            </g>
                        </svg>
                    </div>
                    {isOpen && (
                        <div className="closeIcon" onClick={toggleMenu}>
                            <img src={CloseIcon} alt="Закрыть" />
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;
