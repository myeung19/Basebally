import React, { Component } from 'react';
import { Image } from 'react-native';
import { Button, Body, Container, Content, Left, Header, Icon, Right, Title, Text } from "native-base";

class ProfileScreen extends Component {
    render() {
        const { navigation } = this.props;
        const data = navigation.getParam('data', 'null');
        console.log(data);

        const bio = data.playerProfile.bio;
        const stats = data.playerStats;

        return (
            <Container>
                <Header>
                    <Left>
                        <Button transparent onPress={ () => navigation.goBack() }>
                            <Icon name="arrow-back" />
                        </Button>
                    </Left>
                    <Body>
                        <Title>{data.playerProfile.bio.FirstName} {data.playerProfile.bio.LastName}</Title>
                    </Body>
                    <Right />
                </Header>
                <Content contentContainerStyle={{ display: "flex", justifyContent: "center", alignItem: "center" }}>
                    <Image source={{uri: bio.officialImageSrc}} style={{ width: 150, height: 300}}/>
                </Content>
            </Container>
        );
    }
}

export default ProfileScreen;