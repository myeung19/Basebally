import React from 'react';
import Card from '@material-ui/core/Card'
import CardContent from "@material-ui/core/es/CardContent/CardContent";
import GameIcon from '../../../components/Icon/GameIcon/GameIcon'
import {getTeamInfo} from '../../../util/utils';

import './GameCard.css'

const gameCard = (props) => {
    const data = props.data;
    let hTeam = getTeamInfo(data.homeTeam);
    let aTeam = getTeamInfo(data.awayTeam);

    return (
        <Card className="Card">
            <CardContent>
                <div className="cardContent">
                    <GameIcon
                        teamCity={ hTeam.city }
                        teamName={ hTeam.name }
                        imgSrc={ hTeam.imgSrc } />
                    <h2>{ data.homeScore }</h2>
                    <p>{ data.Inning }</p>
                    <h2>{ data.awayScore }</h2>
                    <GameIcon
                        teamCity={ aTeam.city }
                        teamName={ aTeam.name }
                        imgSrc={ aTeam.imgSrc } />
                </div>
            </CardContent>
        </Card>
    )
};

export default gameCard;
