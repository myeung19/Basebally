import React from 'react';
import Card from "@material-ui/core/es/Card/Card";

import "./ResultCard.css"

const resultCard = (props) => {
    return (
        <Card className="ResultCard" onClick={props.resultCardOnClick}>
            <p>{props.team.City} - {props.team.Name}</p>
            <p> 。 </p>
            <p>{props.name}</p>
            <p> 。 </p>
            <p># {props.jerseyNumber}</p>
        </Card>
    );
};

export default resultCard;
