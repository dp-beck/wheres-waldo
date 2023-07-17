import { Routes, Route, } from "react-router-dom";
import Home from './Home';
import Game from './Game';
import Leaderboard from './Leaderboard';
import NotFound from './NotFound';

import street from './resources/street.jpeg';
import beach from  './resources/beach.jpeg';
import skiSlope from './resources/ski-slope.jpeg'

function App() {

    const correctCoordinates = {
      beachWaldo: [0.530, 0.486],
      beachOdlaw: [0.246, 0.490],
      beachWizard: [0.627, 0.488],
      skiWaldo: [0.857, 0.727],
      skiOdlaw: [.320,0.642],
      skiWizard: [0.069, 0.756],
      streetWaldo:[0.432, 0.758],
      streetOdlaw:[0.591, 0.962],
      streetWizard: [0.659, 0.781],
    };

    return (
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/street" element={<Game 
              name="Street" 
              image={street}
              waldoCoordinates = {correctCoordinates.streetWaldo}
              odlawCoordinates = {correctCoordinates.streetOdlaw}
              wizardCoordinates = {correctCoordinates.streetWizard}/>} />
          <Route path="/beach" element={<Game 
              name="Beach" 
              image={beach}
              waldoCoordinates = {correctCoordinates.beachWaldo}
              odlawCoordinates = {correctCoordinates.beachOdlaw}
              wizardCoordinates = {correctCoordinates.beachWizard}
              />}/>
          <Route path="/ski-slope" element={<Game 
              name="Ski Slope" 
              image={skiSlope}
              waldoCoordinates = {correctCoordinates.skiWaldo}
              odlawCoordinates = {correctCoordinates.skiOdlaw}
              wizardCoordinates = {correctCoordinates.skiWizard}
              />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="*" element={<NotFound />} /> 
        </Routes>
      );
  }
  
  export default App;
  