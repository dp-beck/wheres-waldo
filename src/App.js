import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Home from './Home';
import Game from './Game';
import Leaderboard from './Leaderboard';
import NotFound from './NotFound';

function App() {
    return (
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/ancient-greece" element={<Game name="Ancient Greece"/>} />
          <Route path="/beach" element={<Game name="Beach" />}/>
          <Route path="/castle" element={<Game name="Castle" />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="*" element={<NotFound />} /> 
        </Routes>
      );
  }
  
  export default App;
  