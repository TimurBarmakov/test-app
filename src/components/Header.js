import React from 'react';
import Logo from '../assets/images/logo.svg';  

const Header = () => {
    return (
        <div className="container">
        <header className="header">
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
        </header>
        </div>
    );
};

export default Header;
