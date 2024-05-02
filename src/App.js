import './App.css';
import Logo from './assets/images/logo.svg'
import MainImage from './assets/images/image-web-3-desktop.jpg';
import FirstFooterImage from './assets/images/image-retro-pcs.jpg';
import SecondFooterImage from './assets/images/image-gaming-growth.jpg';
import ThirdFooterImage from './assets/images/image-top-laptops.jpg';



function App() {
  return (
    <div className="container">
      <header className="header">
        <img src={Logo} alt="Основное изображение" />
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
          <div className="contentBlock">
            <div className="mainContent">
                <div className="imageContainer">
                  <img src={MainImage} alt="Основное изображение" />
                </div>
                <div className="mainContentDescription">
                  <h1>The Bright Future of Web 3.0?</h1>
                  <div className="contentDescription">
                    <p>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people.  But is it really fulfilling its promise?</p>
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
          <footer>
            <ul className="footerList">
                <li>
                  <div className="footerImageContainer">
                    <img src={FirstFooterImage} alt="Основное изображение" />
                  </div>
                  <div className="footerDescription">
                    <h2>01</h2>
                    <h3>Reviving Retro PCs</h3>
                    <p>What happens when old PCs are given modern upgrades?</p>
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
          </footer>
    </div>
  );
}

export default App;
