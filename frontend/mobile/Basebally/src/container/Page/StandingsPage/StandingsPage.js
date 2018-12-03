import React, { Component, Fragment } from 'react';
import axios from "axios";
import { RefreshControl } from 'react-native';
import { Container, Header, Content, List, ListItem, Right, Spinner, Text } from 'native-base';
import DescriptionRow from '../../../component/List/DesciptionRow/DesciptionRow';

class StandingsPage extends Component {
    state = {
        data: {},
        isLoading: false,
        // isLoadingFirstTime: true
    };

    componentDidMount() {
        console.log("In com did mount");
        console.log("In com did mount - after setting to true");
        this.getDataFromApi();
        console.log("In com did mount - after fetching data");

        // this.setState({
        //     isLoadingFirstTime: false
        // });
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
        axios.get("http://www.basebally.net/api/team_standings")
            .then((response) => {
                console.log(response);
                console.log(response.data);

                this.setState({
                    data: response.data,
                })
            })
    }

    render() {
        const { data, isLoading } = this.state;
        const keys = Object.keys(data);
        console.log(Object.keys(data).length);

        return (
            <Container style={ style.page }>
                <Content
                    refreshControl={ <RefreshControl refreshing={ isLoading } onRefresh={ this.contentOnRefresh } /> }>
                    <List>
                        {/*{*/}
                            {/*isLoadingFirstTime ?*/}
                                {/*<Spinner color='blue' /> : null*/}
                        {/*}*/}
                        {
                            Object.keys(data).length !== 0 ?
                                keys.map((el, index) => {
                                    const rankings = data[el];

                                    return (
                                        <Fragment key={ index }>
                                            <ListItem itemDivider>
                                                <Text>{ el.replace("/", " - ") }</Text>
                                            </ListItem>
                                            <DescriptionRow />
                                            {
                                                rankings.map((rank, i) => {
                                                    const rankInfo = rank.split(" - ");

                                                    return (
                                                        <ListItem key={ i } noIndent style={ style.titleDescription }>
                                                            <Text>{ rankInfo[0] }</Text>
                                                            <Right style={ style.innerDescription }>
                                                                <Text>{ rankInfo[1] }</Text>
                                                                <Text> - </Text>
                                                                <Text>{ rankInfo[2] }</Text>
                                                                <Text> - </Text>
                                                                <Text>{ rankInfo[3] }</Text>
                                                            </Right>
                                                        </ListItem>
                                                    )
                                                })
                                            }
                                        </Fragment>
                                    )
                                }) : null
                        }
                    </List>
                </Content>
            </Container>
        );
    }
}

const style = {
    page: {
        marginTop: 20
    },
    titleDescription: {

        display: "flex",
        justifyContent: "space-between",
    },
    innerDescription: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
    }
};

export default StandingsPage;