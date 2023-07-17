
import './Game.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CharacterMenu from './CharacterMenu';
import PopupWinForm from './PopupWinForm';

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
    const [allFound, setAllFound] = useState(false);
    const [time, setTime] = useState(0);

    useEffect(() => {
        let interval = null;
        if (!allFound) {
            interval = setInterval(() => {
                setTime((time) => time + 1000);
            }, 1000);
        } else {
            clearInterval(interval);
        };
        return () => {
            clearInterval(interval);
        };
    }, [allFound]);

    useEffect(() => {
        if (waldoFound && odlawFound && wizardFound) {
            setAllFound(true);
            document.getElementById("popup-win-form-wrapper").classList.toggle("toggle");
        };
    }, [waldoFound, odlawFound, wizardFound]);


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

        if ((Math.abs(chosenCoordinates[0] - correctCoordinates[0]) < 0.02) &&
            (Math.abs(chosenCoordinates[1] - correctCoordinates[1]) < 0.02)
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
        }; 
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
        document.getElementById('character-menu').classList.toggle("toggle");
        document.getElementById('selector-circle').classList.toggle("toggle");

    }

    return (
        <div className="game">
            <header className="game-header">
                <h1>{props.name}</h1>
                <div className='icons'>
                    <img src={waldoIcon} className='character-icon' id='waldo-icon' alt='Icon of Waldo'/>
                    <img src={odlawIcon} className='character-icon' id='odlaw-icon' alt='Icon of Odlaw'/>
                    <img src={wizardIcon} className='character-icon' id='wizard-icon' alt='Icon of Wizard'/>
                </div>
                <div id="time"> 
                    <p>{time/1000} seconds</p> 
                </div>

            </header>
            <div className="game-body">
                <img src={props.image} alt="Game" onClick={pictureClickHandler}/>
            </div>
            <div className='footer'>
                <Link id="home-link" to="/">Home</Link>
            </div>
            <CharacterMenu compareCoordinates={menuClickHandler}/>
            <div id="selector-circle" className="toggle"></div>
            <div id="answer-popup" className="toggle"></div>
            <div id="popup-win-form-wrapper" className="toggle">
                <PopupWinForm
                    time = {time}
                    level = {props.name}/>
            </div>
        </div>
    );
}

export default Game;