import './Game.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import CharacterMenu from './CharacterMenu';

import waldoIcon from './resources/waldo-icon.png';
import odlawIcon from './resources/odlaw-icon.gif';
import wizardIcon from './resources/wizard-icon.gif';

function Game (props) {

    const correctText = "You are right!";
    const incorrectText = "Wrong. Try Again!"; 

    const [chosenCoordinates, setChosenCoordinates] = useState([0,0]);

    const [waldoFound, setWaldoFound] = useState(false);
    const [odlawFound, setOdlawFound] = useState(false);
    const [wizardFound, setWizardFound] = useState(false);

    // TO DO -- CURRENTLY IN PROGRESS -- FUNCTIONALITY TO TIME HOW LONG IT TAKES;
    // TEST WHEN DONE; LIKELY MOVE TO SEPARATE MODULES/COMPONENTS FOR BETTER READING

    // showCoordinates returns the X, Y position of a click relative to the clicked element
    // and as percents to account for different image size.
    function getCoordinates (e) {
        const coordinates = [(e.nativeEvent.offsetX)/(e.target.clientWidth), 
                            (e.nativeEvent.offsetY)/(e.target.clientHeight)];
        console.log(coordinates);
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

    function selectAnswer (result) {
        if (result) {
            return correctText;
        } else {
            return incorrectText;
        }
    }

    function updateFoundStatus(result, e) {
        let characterIcon;
        if (result) {
            switch (e.target.innerText) {
                case 'Waldo':
                    setWaldoFound(true);
                    characterIcon = document.getElementById('waldo-icon');
                    if (!characterIcon.classList.contains("found-toggle")) {
                        characterIcon.classList.toggle("found-toggle");
                    }
                    break;
                case 'Odlaw':
                    setOdlawFound(true);
                    characterIcon = document.getElementById('odlaw-icon');
                    if (!characterIcon.classList.contains("found-toggle")) {
                        characterIcon.classList.toggle("found-toggle");
                    }
                    break;
                case 'Wizard':
                    setWizardFound(true);
                    characterIcon = document.getElementById('wizard-icon');
                    if (!characterIcon.classList.contains("found-toggle")) {
                        characterIcon.classList.toggle("found-toggle");
                    }
                    break;
                default:
                    break;
            };
        }
    }
    
    function displayCharacterList(e) {
        const menu = document.getElementById("character-menu");
        menu.classList.toggle('toggle');
        
        const topOffset = (e.pageY)+'px';
        menu.style.top = topOffset;

        const leftOffset = (e.pageX+50)+'px';
        menu.style.left = leftOffset;
    }

    function displaySelectorCircle(e) {
        const selectorCircle = document.getElementById('selector-circle');
        selectorCircle.classList.toggle('toggle');
        
        const topOffset = (e.pageY-25)+'px';
        selectorCircle.style.top = topOffset;

        const leftOffset = (e.pageX-25)+'px';
        selectorCircle.style.left = leftOffset;
    }

    function pictureClickHandler (e) {
        const answer = document.getElementById('answer-popup');
        if (!answer.classList.contains("toggle")) {
            answer.classList.toggle('toggle');
        };
        getCoordinates(e);
        displayCharacterList(e);
        displaySelectorCircle(e);
    }

    function popupAnswer (text) {
        const answer = document.getElementById('answer-popup');
        answer.innerText = text;
        answer.classList.toggle('toggle');
    }

    function menuClickHandler (e) {
        const result = compareCoordinates(e);
        const answerText = selectAnswer(result);
        popupAnswer(answerText);
        updateFoundStatus(result, e);
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
                <div className='icons'>
                    <img src={waldoIcon} className='character-icon' id='waldo-icon' alt='Icon of Waldo'/>
                    <img src={odlawIcon} className='character-icon' id='odlaw-icon' alt='Icon of Odlaw'/>
                    <img src={wizardIcon} className='character-icon' id='wizard-icon' alt='Icon of Wizard'/>
                </div>

                <div>
                    TIMER
                </div>
            </header>
            <div className="game-body">
                <img src={props.image} alt="Game" onClick={pictureClickHandler}/>
            </div>
            <CharacterMenu compareCoordinates={menuClickHandler}/>
            <div id="selector-circle" className="toggle"></div>
            <div id="answer-popup" className="toggle"></div>
            <Link to="/">Home</Link>
        </div>
    );
}

export default Game;