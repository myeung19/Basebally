import React from 'react';
import { Content, Text, Thumbnail } from "native-base";
import { getTeamInfo } from "../../../util/utils";

const gameScoreCard = (props) => {
    return (
        <>
            {
                props.teamType === "home" ?
                    <Content contentContainerStyle={style.gameScoreCard}>
                        <Thumbnail square small source={ getTeamInfo(props.team).imgSrc } />
                        <Text>{ getTeamInfo(props.team).name }</Text>
                        <Text style={ { fontWeight: 'bold' } }>{ props.score }</Text>
                    </Content>
                    : null
            }
            {
                props.teamType === "away" ?
                    <Content contentContainerStyle={style.gameScoreCard}>
                        <Text style={ { fontWeight: 'bold' } }>{ props.score }</Text>
                        <Text>{ getTeamInfo(props.team).name }</Text>
                        <Thumbnail square small source={ getTeamInfo(props.team).imgSrc } />
                    </Content> : null
            }
        </>
    )
};

const style = {
    gameScoreCard: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center"
    }
};

export default gameScoreCard;
