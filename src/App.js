import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Home from './Home';
import Game from './Game';
import Leaderboard from './Leaderboard';
import NotFound from './NotFound';

function App() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/ancient-greece" element={<Game />} />
          <Route path="/beach" element={<Game />}/>
          <Route path="/castle" element={<Game />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="*" element={<NotFound />} /> 
        </Routes>
      </BrowserRouter>
      );
  }
  
  export default App;
  