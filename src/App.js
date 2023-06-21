import { Routes, Route, } from "react-router-dom";
import Home from './Home';
import Game from './Game';
import Leaderboard from './Leaderboard';
import NotFound from './NotFound';

import ancientGreece from './resources/ancient-greece.jpg';
import beach from  './resources/beach.png';
import castle from './resources/castle.jpg'

function App() {

    const correctCoordinates = {
      beachWaldo: [0.497, 0.375],
      beachOdlaw: [0, 0],
      beachWizard: [0, 0]
    };

    return (
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/ancient-greece" element={<Game name="Ancient Greece" image={ancientGreece}/>} />
          <Route path="/beach" element={<Game 
              name="Beach" 
              image={beach}
              waldoCoordinates = {correctCoordinates.beachWaldo}
              odlawCoordinates = {correctCoordinates.beachOdlaw}
              wizardCoordinates = {correctCoordinates.beachWizard}
              />}/>
          <Route path="/castle" element={<Game name="Castle" image={castle} />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="*" element={<NotFound />} /> 
        </Routes>
      );
  }
  
  export default App;
  