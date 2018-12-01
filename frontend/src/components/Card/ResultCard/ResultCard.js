import React from 'react';
import Card from "@material-ui/core/es/Card/Card";

const resultCard = (props) => {
    return (
        <Card>
            <p>props.name</p>
            <p>props.jerseyNumber</p>
        </Card>
    );
};

export default resultCard;
