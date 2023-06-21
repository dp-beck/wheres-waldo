import waldoIcon from './resources/waldo-icon.png';
import odlawIcon from './resources/odlaw-icon.gif';
import wizardIcon from './resources/wizard-icon.gif';

function CharacterMenu (props) {
    return (
        <div id='character-menu' className='character-menu-toggle'>
            <div onClick={props.compareCoordinates}>Waldo</div>
            <div onClick={props.compareCoordinates}>Odlaw</div>
            <div onClick={props.compareCoordinates}>Wizard</div>
        </div>
    )
}

export default CharacterMenu;