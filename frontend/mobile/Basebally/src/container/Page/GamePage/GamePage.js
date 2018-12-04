import React, { Component } from 'react';
import { RefreshControl } from "react-native";
import axios from 'axios'
import { Container, Header, Content, Card, CardItem, Icon, Text, Body } from 'native-base';

import GameCard from '../../../component/Card/GameCard/GameCard';

class GamePage extends Component {
    state = {
        data: [],
        isLoading: false
    };

    componentDidMount() {
        this.getDataFromApi();
    }

    contentOnRefresh = () => {
        this.setState({
            isLoading: true
        });
        this.getDataFromApi();
        this.setState({
            isLoading: false
        });
    };

    getDataFromApi() {
        axios.get("http://www.basebally.net/api/game")
            .then((response) => {
                this.setState({
                    data: response.data,
                })
            })
    }

    render() {
        const { data, isLoading } = this.state;

        return (
            <Container style={ { marginTop: 20 } }>
                <Content padder refreshControl={<RefreshControl refreshing={isLoading} onRefresh={this.contentOnRefresh}/>}>
                    {
                        data.length !== 0 ?
                            data.map((el, index) => {
                                return (
                                    <GameCard
                                        key={ index }
                                        inning={ el.Inning }
                                        homeTeam={ el.homeTeam }
                                        homeScore={ el.homeScore }
                                        awayTeam={ el.awayTeam }
                                        awayScore={ el.awayScore }
                                    />
                                )
                            }) : null
                    }
                </Content>
            </Container>
        );
    }
}

export default GamePage;