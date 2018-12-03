import React from 'react';
import { ListItem, Right, Text } from "native-base";

const descriptionRow = () => {
    return (
        <ListItem noIndent style={style.titleDescription}>
            <Text>Team</Text>
            <Right style={style.innerDescription}>
                <Text>W</Text>
                <Text> - </Text>
                <Text>L</Text>
                <Text> - </Text>
                <Text>Win%</Text>
            </Right>
        </ListItem>
    );
};

const style = {
    titleDescription: {
        backgroundColor: "grey",
        display: "flex",
        justifyContent: "space-between",
    },
    innerDescription: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
    }
};


export default descriptionRow;
