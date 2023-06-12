import './Home.css';
import ancientGreece from './resources/ancient-greece.jpg';
import beach from  './resources/beach.png';
import castle from './resources/castle.jpg'
import waldoIcon from './resources/waldo-icon.png';
import odlawIcon from './resources/odlaw-icon.gif';
import wizardIcon from './resources/wizard-icon.gif';
import { Link } from "react-router-dom";


function Home() {
  return (
    <div>
      <header>Where's Waldo?</header>
      <main>
        <div className='link-to-game'>
          <Link to="/ancient-greece">
          <img src={ancientGreece} className='waldo-map-icon' alt='Icon of Ancient Greece'/>
          <p>Ancient Greece</p>
          </Link>
        </div>

        <div className='link-to-game'>
        <Link to="/beach">
          <img src={beach} className='waldo-map-icon' alt='Icon of Beach'/>
          <p>Beach</p>
          </Link>
        </div>

        <div className='link-to-game'>
        <Link to="/castle">
          <img src={castle} className='waldo-map-icon' alt='Icon of Castle'/>
          <p>Castle</p>
          </Link>
        </div>

        <div className='description'>
          <p>This is the classic Where's Waldo Game! When you select one of the above photos,
            you will have a chance to search and find all of the three characters displayed 
            here. You will be timed, and the best times will be displayed on the leaderboard
            page.
          </p>
          <div className='icons'>
            <img src={waldoIcon} className='character-icon' alt='Icon of Waldo'/>
            <img src={odlawIcon} className='character-icon' alt='Icon of Odlaw'/>
            <img src={wizardIcon} className='character-icon' alt='Icon of Wizard'/>
          </div>
        </div>

        <div className='link-to-leaderboard'>
          <Link to="/leaderboard">
            Leaderboard
          </Link>
        </div>
      </main>
    </div>
    );
}

export default Home;
