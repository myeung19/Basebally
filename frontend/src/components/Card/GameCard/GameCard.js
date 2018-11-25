import React from 'react';
import Card from '@material-ui/core/Card'
import CardContent from "@material-ui/core/es/CardContent/CardContent";
import GameIcon from '../../../components/Icon/GameIcon/GameIcon'
import { getTeamName, getTeamIcon } from '../../../util/utils';

import './GameCard.css'

const gameCard = () => {
    const propsData = [
        {
            homeTeam: "LAA",
            homeScore: "5",
            awayTeam: "LAD",
            awayScore: "9"
        },
        {
            homeTeam: "TEX",
            homeScore: "1",
            awayTeam: "NYY",
            awayScore: "10"
        }
    ];

    return (
        propsData.map((element, index) => (
            <Card key={index} className="Card">
                <CardContent>
                    <div className="content">
                        <GameIcon teamName={getTeamName(element.homeTeam)} imgSrc={getTeamIcon(element.homeTeam)}/>
                        <p>Final</p>
                        <GameIcon teamName={getTeamName(element.awayTeam)} imgSrc={getTeamIcon(element.awayTeam)}/>
                    </div>
                </CardContent>
            </Card>
        ))
    );
};

export default gameCard;
