import React, { Component } from 'react';
import { Image } from 'react-native';
import { Button, Body, Container, Content, Left, List, ListItem, Header, Icon, Right, Title, Text } from "native-base";

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
                        <Title>{ data.playerProfile.bio.FirstName } { data.playerProfile.bio.LastName }</Title>
                    </Body>
                    <Right />
                </Header>
                <Content>
                    <Content contentContainerStyle={ style.profileImg }>
                        <Image source={ { uri: bio.officialImageSrc } } style={ { width: 150, height: 300 } } />
                    </Content>

                    {
                        <>
                            <Text style={ style.title }>Bio</Text>
                            <List>
                                <ListItem>
                                    <Body>
                                        <Text>Team</Text>
                                    </Body>
                                    <Text>{ bio.team.City } { bio.team.Name }</Text>
                                </ListItem>
                                {
                                    Object.keys(bio).slice(3, 11).map((el, i) => {
                                        return (
                                            <ListItem key={ i }>
                                                <Body>
                                                    <Text>{ el }</Text>
                                                </Body>
                                                <Text>{ bio[el] }</Text>
                                            </ListItem>
                                        )
                                    })
                                }
                            </List>
                        </>
                    }
                    <Text>{ "\n" }</Text>

                    {
                        <>
                            <Text style={ style.title }>Stats</Text>
                            <List>
                                {
                                    Object.keys(stats).map((el, i) => {
                                        console.log(el);
                                        return (
                                            <ListItem key={ i }>
                                                    <Body>
                                                        <Text>{ stats[el]["@abbreviation"] }</Text>
                                                        <Text note>{ el }</Text>
                                                    </Body>
                                                <Right>
                                                    <Text>{ stats[el]["#text"] }</Text>
                                                </Right>
                                            </ListItem>
                                        )
                                    })
                                }
                            </List>
                        </>
                    }
                </Content>
            </Container>
        );
    }
}

const style = {
    profileImg: {
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 20,
        fontSize: 25,
        fontWeight: "bold"
    }
};

export default ProfileScreen;