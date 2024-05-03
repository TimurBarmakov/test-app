import React from 'react';
import './Footer.css';
import FirstFooterImage from '../assets/images/image-retro-pcs.jpg';
import SecondFooterImage from '../assets/images/image-gaming-growth.jpg';
import ThirdFooterImage from '../assets/images/image-top-laptops.jpg';

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <ul className="footerList">
                    <li>
                        <div className="footerImageContainer">
                            <img src={FirstFooterImage} alt="Основное изображение" />
                        </div>
                        <div className="footerDescription">
                            <h2>01</h2>
                            <h3>Reviving Retro PCs</h3>
                            <p>What happens when old PCs are given modern upgrades?
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className="footerImageContainer">
                            <img src={SecondFooterImage} alt="Основное изображение" />
                        </div>
                        <div className="footerDescription">
                            <h2>02</h2>
                            <h3>Top 10 Laptops of 2022</h3>
                            <p>Our best picks for various needs and budgets.</p>
                        </div>
                    </li>
                    <li>
                        <div className="footerImageContainer">
                            <img src={ThirdFooterImage} alt="Основное изображение" />
                        </div>
                        <div className="footerDescription">
                            <h2>03</h2>
                            <h3>The Growth of Gaming</h3>
                            <p>How the pandemic has sparked fresh opportunities.</p>
                        </div>
                    </li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;
