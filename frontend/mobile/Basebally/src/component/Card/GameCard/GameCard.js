import React from 'react';
import { Card, CardItem, Icon, Text,  Thumbnail } from "native-base";
import GameScoreCard from "../GameScoreCard/GameScoreCard"

const gameCard = (props) => {
    return (
        <Card>
            <CardItem style={style.card}>
                <GameScoreCard
                    style={style.home}
                    teamType="home"
                    team={props.homeTeam}
                    score={props.homeScore}/>
                <Text>{props.inning}</Text>
                <GameScoreCard
                    teamType="away"
                    team={props.awayTeam}
                    score={props.awayScore}/>
            </CardItem>
        </Card>
    );
};

const style = {
    card: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
    },
    home: {
        alignContent: "left"
    },
    away: {
        float: "right"
    }
};

export default gameCard;
