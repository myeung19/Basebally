import React, {Component} from 'react';
import {
    Text,
    Container,
    Content
} from "native-base";


class StandingsPage extends Component {
    render() {
        console.log(this.props.navigation.state);
        console.log(this.props.navigation.state.routeName);
        return (
            <Container>
                <Content padder style={{ marginTop: 20}}>
                    <Text>Standings</Text>
                </Content>
            </Container>
        );
    }
}

export default StandingsPage;