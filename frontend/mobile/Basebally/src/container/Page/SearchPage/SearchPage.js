import React, {Component} from 'react';
import {
    Text,
    Container,
    Content
} from "native-base";


class SearchPage extends Component {
    render() {
        console.log(this.props.navigation.state);
        console.log(this.props.navigation.state.routeName);
        return (
            <Container>
                <Content padder style={{ marginTop: 20}}>
                    <Text>Search</Text>
                </Content>
            </Container>
        );
    }
}

export default SearchPage;