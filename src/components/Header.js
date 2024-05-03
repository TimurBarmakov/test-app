import React from 'react';
import './Header.css';
import Logo from '../assets/images/logo.svg';  
import IconMenu from '../assets/images/icon-menu.svg';  
import CloseIcon from '../assets/images/icon-menu-close.svg'
import { useState } from 'react';


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
                        <div className="closeIcon" onClick={toggleMenu}>
                            <img src={CloseIcon} alt="Закрыть" />
                        </div>
                    </ul>
                    <div className="mobileImageContainer" onClick={toggleMenu}>
                        <img src={IconMenu} alt="Меню" />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header
