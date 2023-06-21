import './Game.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import CharacterMenu from './CharacterMenu';

function Game (props) {

    const [chosenCoordinates, setChosenCoordinates] = useState([0,0]);

    // TO DO -- CURRENTLY IN PROGRESS -- FUNCTIONALITY TO HANDLE CHOOSING A SPOT ON THE PIC;
    // TEST WHEN DONE; LIKELY MOVE TO SEPARATE MODULES/COMPONENTS FOR BETTER READING

    // showCoordinates returns the X, Y position of a click relative to the clicked element
    // and as percents to account for different image size.
    function getCoordinates (e) {
        const coordinates = [(e.nativeEvent.offsetX)/(e.target.clientWidth), 
                            (e.nativeEvent.offsetY)/(e.target.clientHeight)];
        setChosenCoordinates(coordinates);
    }

    // compareCoordinates returns true if the chosen coordinates are within 0.1 of the correct coordinates
    // for a give icon
    function compareCoordinates(e) {
        let correctCoordinates;
        switch (e.target.innerText) {
            case 'Waldo':
                correctCoordinates = props.waldoCoordinates;
                break;
            case 'Odlaw':
                correctCoordinates = props.odlawCoordinates;
                break;
            case 'Wizard':
                correctCoordinates = props.wizardCoordinates;
                break;
            default:
                correctCoordinates = 'oops';
                break;
        };

        if ((Math.abs(chosenCoordinates[0] - correctCoordinates[0]) < 0.1) &&
            (Math.abs(chosenCoordinates[1] - correctCoordinates[1]) < 0.1)
            ) {
                return true;
            } else {
                return false;
            };
    }

    function displayCharacterList(e) {
        const menu = document.getElementById("character-menu");
        menu.classList.toggle('character-menu-toggle');
        
        const topOffset = e.clientY+'px';
        menu.style.top = topOffset;

        const leftOffset = e.clientX+'px';
        menu.style.left = leftOffset;
    }

    function pictureClickHandler (e) {
        getCoordinates(e);
        displayCharacterList(e);
    }

    // Timer Function:
    // 1. Initialize a new time on page load, starting at 0
    // 2. Stop Timer Once the following conditions are met:
    //      A. Waldo is marked as found
    //      B. Odlaw is marked as found
    //      C. Wizrd is marked as found
    return (
        <div className="game">
            <header className="game-header">
                <h1>{props.name}</h1>
                <Link to="/">Home</Link>
                <div>
                    TIMER
                </div>
            </header>
            <div className="game-body">
                <img src={props.image} alt="Game" onClick={pictureClickHandler}/>
            </div>
            <CharacterMenu compareCoordinates={compareCoordinates}/>
        </div>
    );
}

export default Game;