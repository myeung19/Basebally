import React, { Component } from "react";
import { createBottomTabNavigator, TabBarBottom, createAppContainer } from "react-navigation";
import {
    Button,
    Text,
    Icon,
    Item,
    Footer,
    FooterTab,
    Label
} from "native-base";
import GamePage from '../../Page/GamePage/GamePage';
import StandingsPage from '../../Page/StandingsPage/StandingsPage';
import SearchPage from '../../Page/SearchPage/SearchPage';

const nav = createAppContainer(createBottomTabNavigator(
    {
        GamePage: {
            screen: props => <GamePage { ...props } />
        },
        StandingsPage: {
            screen: props => <StandingsPage { ...props } />
        },
        SearchPage: {
            screen: props => <SearchPage { ...props } />
        }
    },
    {
        tabBarPosition: "bottom",
        tabBarComponent: props => {
            const { index } = props.navigation.state;

            return (
                <Footer>
                    <FooterTab>
                        <Button
                            vertical
                            active={ index === 0 }
                            onPress={ () => props.navigation.navigate("GamePage") }
                        >
                            <Icon name="ios-baseball" type="Ionicons" size={ 15 } />
                            <Text>Game</Text>
                        </Button>
                        <Button
                            vertical
                            active={ index === 1 }
                            onPress={ () => props.navigation.navigate("StandingsPage") }
                        >
                            <Icon name="bar-chart" type="FontAwesome" size={ 15 } />
                            <Text>Standings</Text>
                        </Button>
                        <Button
                            vertical
                            active={ index === 2 }
                            onPress={ () => props.navigation.navigate("SearchPage") }
                        >
                            <Icon name="search" type="FontAwesome" />
                            <Text>Search</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            )
                ;
        }
    }
    )
);

// active={props.navigationState.index === 0}
export default nav;
