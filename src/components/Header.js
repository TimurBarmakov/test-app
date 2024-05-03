import React from 'react';
import './Header.css';
import Logo from '../assets/images/logo.svg';  

const Header = () => {
    return (
        <header className="header">
        <div className="container">
                <img src={Logo} alt="Логотип" />
                <div className='headerNavigation'>
                    <ul className="headerNavigationMenu">
                        <li>Home</li>
                        <li>New</li>
                        <li>Popular</li>
                        <li>Trending</li>
                        <li>Categories</li>
                    </ul>
                </div>
        </div>
        </header>

    );
};

export default Header;
