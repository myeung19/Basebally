import React, { Component } from 'react';
import axios from 'axios';
import { TextInput } from 'react-native'
import {
    Container,
    Content,
    Left,
    List,
    ListItem,
    Header,
    Item,
    Icon,
    Button,
    Right,
    Text,
    Toast,
    Spinner
} from 'native-base';

class SearchScreen extends Component {
    constructor() {
        super();

        this.state = {
            data: [],
            errorMsg: null,
            isError: false,
            isLoading: false,
            isErrorToastShown: false,
            isSearchBtnDisabled: false
        };
        this.searchTextField = React.createRef();
    }

    handleSearchBtnClick = () => {
        console.log(this.searchTextField._lastNativeText);
        if (this.searchTextField._lastNativeText === ("" || undefined)) {
            console.log("in on click");
            this.setState({ isErrorToastShown: true, errorMsg: "Please input something" });
            return;
        }

        this.setState({ isLoading: true, isSearchBtnDisabled: true });
        this.getPlayerStats();
        this.setState({ isLoading: false, isSearchBtnDisabled: false });
    };

    handleErrorToastOnClose = () => {
        this.setState({ isErrorToastShown: false, errorMsg: null })
    };

    getPlayerStats() {
        const name = this.searchTextField._lastNativeText.split(" ");
        axios.get("http://www.basebally.net/api/playerStats?player=" + name[0] + "-" + name[1])
            .then((response) => {
                const data = [{ ...response.data }];
                this.setState({
                    data: data,
                    isError: data[0].error !== undefined,
                    errorMsg: data[0].error !== undefined ? "Player not found" : null,
                    isErrorToastShown: data[0].error !== undefined
                })
            });
    }

    render() {
        const { data, errorMsg, isLoading, isErrorToastShown, isSearchBtnDisabled } = this.state;
        const { navigate } = this.props.navigation;

        return (
            <Container style={ { marginTop: 0 } }>
                <Header searchBar rounded>
                    <Item>
                        <Icon name="ios-search" />
                        <TextInput
                            keyboardType="default"
                            placeholder="Search"
                            ref={ ref => this.searchTextField = ref } />
                    </Item>
                    <Button transparent disabled={ isSearchBtnDisabled } onPress={ this.handleSearchBtnClick }>
                        <Text>Search</Text>
                    </Button>
                </Header>
                <Content>
                    {
                        isLoading === true ?
                            <Spinner color='blue' /> : null
                    }
                    {
                        isErrorToastShown === true ?
                            Toast.show({
                                text: errorMsg,
                                buttonText: "Okay",
                                position: "bottom",
                                duration: 2500,
                                onClose: this.handleErrorToastOnClose
                            }) : null
                    }
                    {
                        <List>
                            {
                                data.length !== 0 ?
                                    data.map((el, i) => {
                                        const bio = el.playerProfile.bio;
                                        return (
                                            <ListItem key={ i }>
                                                <Left>
                                                    <Text>#{ bio.JerseyNumber } - { bio.FirstName } { bio.LastName }</Text>
                                                </Left>
                                                <Right>
                                                    <Icon name="arrow-forward"
                                                          onPress={ () => navigate("Profile", { data: data[i] }) } />
                                                </Right>
                                            </ListItem>
                                        )
                                    }) : null
                            }
                        </List>
                    }
                </Content>
            </Container>
        );
    }

}

export default SearchScreen;