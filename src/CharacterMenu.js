import waldoIcon from './resources/waldo-icon.png';
import odlawIcon from './resources/odlaw-icon.gif';
import wizardIcon from './resources/wizard-icon.gif';

//ReStyle
//Add Icon Small

function CharacterMenu (props) {
    return (
        <div id='character-menu' className='toggle'>
            <div className="menu-item" onClick={props.compareCoordinates}>Waldo</div>
            <div className="menu-item" onClick={props.compareCoordinates}>Odlaw</div>
            <div className="menu-item" onClick={props.compareCoordinates}>Wizard</div>
        </div>
    )
}

export default CharacterMenu;