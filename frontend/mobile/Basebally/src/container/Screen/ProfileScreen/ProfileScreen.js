import React, { Component } from 'react';
import { Button, Body, Container, Left, Header, Icon, Right, Title } from "native-base";

class ProfileScreen extends Component {
    render() {
        const { navigation } = this.props;
        const name = navigation.getParam('name', 'null');

        return (
            <Container>
                <Header>
                    <Left>
                        <Button transparent onPress={ () => navigation.goBack() }>
                            <Icon name="arrow-back" />
                        </Button>
                    </Left>
                    <Body>
                        <Title>{ name }</Title>
                    </Body>
                    <Right />
                </Header>
            </Container>
        );
    }
}

export default ProfileScreen;