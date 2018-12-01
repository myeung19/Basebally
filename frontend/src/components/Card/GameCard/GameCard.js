import React from 'react';
import Card from '@material-ui/core/Card'
import CardContent from "@material-ui/core/es/CardContent/CardContent";
import GameIcon from '../../../components/Icon/GameIcon/GameIcon'
import {getTeamInfo} from '../../../util/utils';

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
        propsData.map((element, index) => {
            let hTeam = getTeamInfo(element.homeTeam);
            let aTeam = getTeamInfo(element.awayTeam);
            return (
                <Card key={index} className="Card">
                    <CardContent>
                        <div className="cardContent">
                            <GameIcon
                                teamCity={hTeam.city}
                                teamName={hTeam.name}
                                teamScore={element.homeScore}
                                imgSrc={hTeam.imgSrc}/>
                            <h2>{element.homeScore}</h2>
                            <p>Final</p>
                            <h2>{element.awayScore}</h2>
                            <GameIcon
                                teamCity={aTeam.city}
                                teamName={aTeam.name}
                                teamScore={element.awayScore}
                                imgSrc={aTeam.imgSrc}/>
                        </div>
                    </CardContent>
                </Card>
            )
        })
    );
};

export default gameCard;
