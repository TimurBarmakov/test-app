import React from 'react';
import './ContentBlock.css';
import MainImage from '../assets/images/image-web-3-desktop.jpg';

const ContentBlock = () => {
    return (
        <div className="container">
            <div className="contentBlock">
                <div className="mainContent">
                    <div className="imageContainer">
                        <img src={MainImage} alt="Основное изображение" />
                    </div>
                    <div className="mainContentDescription">
                        <h1>The Bright Future of Web 3.0?</h1>
                        <div className="contentDescription">
                            <p>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?</p>
                            <button>READ MORE</button>
                        </div>
                    </div>
                </div>
                <div className="newsBlock">
                    <h2>New</h2>
                    <ul className="newsList">
                        <li>
                            <h3>Hydrogen VS Electric Cars</h3>
                            <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
                            <hr />
                        </li>
                        <li>
                            <h3>The Downsides of AI Artistry</h3>
                            <p>What are the possible adverse effects of on-demand AI image generation?</p>
                            <hr />
                        </li>
                        <li>
                            <h3>Is VC Funding Drying Up?</h3>
                            <p>Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ContentBlock;
