import React, {Component} from 'react';
import {
    Text,
    Container,
    Content
} from "native-base";

class GamePage extends Component {
    render() {
        const {getParam} = this.props.navigation;
        console.log(this.props.navigation.state);
        console.log(getParam("currentPage"));
        return (
            <Container>
                <Content padder style={{ marginTop: 20}}>
                        <Text>Game</Text>
                </Content>
            </Container>
        );
    }
}

export default GamePage;