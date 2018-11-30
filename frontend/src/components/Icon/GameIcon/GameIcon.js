import React from 'react';
import './GameIcon.css'

const gameIcon = (props) => {
    return (
        <div className="GameIcon">
            <p>{props.teamCity}</p>
            <p>{props.teamName}</p>
            <img className="icon" src={props.imgSrc} alt={props.teamName}/>
        </div>
    );
};

export default gameIcon;
