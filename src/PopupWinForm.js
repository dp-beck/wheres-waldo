import './PopupWinForm.css';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore , addDoc, collection } from "firebase/firestore";
import { useNavigate } from 'react-router-dom';


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
const analytics = getAnalytics(app);
  
const db = getFirestore(app);

async function writeScoreToDatabase(name, score, level) {
    try {
        const docRef = await addDoc(collection(db, "high-scores"), {
            name: name,
            score: score,
            level: level,
            });
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
  }
}

// Finish this
// TO DO:
//    3. Write out what happens after you submit your name -- GO BACK TO HOME?
//    4. Update cloud firestore database to production mode with good security rules

function PopupWinForm (props) {

    const navigate = useNavigate();

    return (
        <div> 
            <h1>You scored {props.time/1000} seconds!</h1>
            <p>Please enter your name below so that we can add you to the leaderboard.</p>
            <input type='text' id="name-input"></input>
            <button onClick={() => {
                let name = document.getElementById("name-input").value;
                writeScoreToDatabase(name, props.time, props.level);
                navigate("/leaderboard");
                }}>Submit
            </button>
        </div>
    )
}

export default PopupWinForm;