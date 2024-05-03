import React from 'react';
import './Footer.css';
import FirstFooterImage from '../assets/images/image-retro-pcs.jpg';
import SecondFooterImage from '../assets/images/image-gaming-growth.jpg';
import ThirdFooterImage from '../assets/images/image-top-laptops.jpg';

const Footer = () => {
    const footerData = [
        {
            id: 1,
            imgSrc: FirstFooterImage,
            title: "01",
            subTitle: "Reviving Retro PCs",
            description: "What happens when old PCs are given modern upgrades?"
        },
        {
            id: 2,
            imgSrc: SecondFooterImage,
            title: "02",
            subTitle: "Top 10 Laptops of 2022",
            description: "Our best picks for various needs and budgets."
        },
        {
            id: 3,
            imgSrc: ThirdFooterImage,
            title: "03",
            subTitle: "The Growth of Gaming",
            description: "How the pandemic has sparked fresh opportunities."
        },
        {
            id: 4,
            imgSrc: ThirdFooterImage,
            title: "04",
            subTitle: "The Growth of Gaming",
            description: "How the pandemic has sparked fresh opportunities."
        }
    ];

    return (
        <footer>
            <div className="container">
                    <ul className="footerList">
                    {footerData.map((item) => (
                        <li key={item.id}>
                            <div className="footerImageContainer">
                                <img src={item.imgSrc} alt="Основное изображение" />
                            </div>
                            <div className="footerDescription">
                                <h2>{item.title}</h2>
                                <h3>{item.subTitle}</h3>
                                <p>{item.description}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </footer>
    );
}

export default Footer;
