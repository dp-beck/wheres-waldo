import './Leaderboard.css';
import { initializeApp } from "firebase/app";
import { getFirestore , collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";


const firebaseConfig = {
    apiKey: "AIzaSyDH_kFcoICJfF8JoVPaeLwQDuFvWtLUXMs",
    authDomain: "where-s-waldo-7529b.firebaseapp.com",
    projectId: "where-s-waldo-7529b",
    storageBucket: "where-s-waldo-7529b.appspot.com",
    messagingSenderId: "740281259274",
    appId: "1:740281259274:web:b9f37c5c8df63913e596f3",
    measurementId: "G-K633V7ZYZJ"
  };
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);
  
const db = getFirestore(app);

function Leaderboard () {

  const [highScores, setHighScores] = useState([]);
  
  function compareScores(a,b) {
    if(a.score < b.score) {
      return -1;
    }
    if (a.score > b.score) {
      return 1;
    }
  };
  
  const fetchHighScores = async () => {
    await getDocs(collection(db, 'high-scores'))
      .then((querySnapshot) => {
        const newData = querySnapshot.docs
          .map((doc)=> ({...doc.data(),id: doc.id }));
          setHighScores(newData);
      })
  }

  useEffect(() => {
    fetchHighScores();
  }, [])

  return (
        <div>
          <h1>Leaderboard</h1>
          <div className='leaderboard'>
            
            <div className="leaderboard-section">
              <h2>Beach</h2>
              <ol>
                {highScores.filter(highScore => highScore.level === 'Beach')
                  .sort(compareScores)
                  .map((highScore) => {
                    return (
                      <li>{highScore.name + ": " + highScore.score/1000 + " seconds"}</li>)
                  } )}
              </ol>
            </div>

            <div className='leaderboard-section'>
              <h2>Street</h2>
              <ol>
                {highScores.filter(highScore => highScore.level === 'Street')
                  .sort(compareScores)
                  .map((highScore) => {
                    return (
                      <li>{highScore.name + ": " + highScore.score/1000 + " seconds"}</li>)
                  } )}
              </ol>
            </div>

            <div className='leaderboard-section'> 
              <h2>Ski Slope</h2>
              <ol>
                {highScores.filter(highScore => highScore.level === 'Ski Slope')
                  .sort(compareScores)
                  .map((highScore) => {
                    return (
                      <li>{highScore.name + ": " + highScore.score/1000 + " seconds"}</li>)
                  } )}
              </ol>
            </div>

          </div>

          <div className='footer'>
              <Link id="home-link" to="/">Home</Link>
          </div>

        </div>
    );
}

export default Leaderboard;