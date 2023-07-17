import './Home.css';
import street from './resources/street.jpeg';
import beach from  './resources/beach.jpeg';
import skiSlope from './resources/ski-slope.jpeg'
import waldoIcon from './resources/waldo-icon.png';
import odlawIcon from './resources/odlaw-icon.gif';
import wizardIcon from './resources/wizard-icon.gif';
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <header>
        <h1>Where's Waldo</h1>
      </header>
      <main>
        <div className='link-to-game'>
          <Link to="/street">
          <img src={street} className='waldo-map-icon' alt='Icon of Street'/>
          <p>Street</p>
          </Link>
        </div>

        <div className='link-to-game'>
        <Link to="/beach">
          <img src={beach} className='waldo-map-icon' alt='Icon of Beach'/>
          <p>Beach</p>
          </Link>
        </div>

        <div className='link-to-game'>
        <Link to="/ski-slope">
          <img src={skiSlope} className='waldo-map-icon' alt='Icon of Ski Slope'/>
          <p>Ski Slope</p>
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
            <h1>Leaderboard</h1>
          </Link>
        </div>
      </main>
    </div>
    );
}

export default Home;
