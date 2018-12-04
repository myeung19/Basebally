import React, {Component} from 'react';
import { Container, Header, Item, Input, Icon, Button, Text } from 'native-base';

class SearchScreen extends Component {
    constructor() {
        super();

        this.state = {};
        this.searchTextField = React.createRef();
    }

    handleSearchBtnClick = () => {
        console.log(this.searchTextField.current._root._lastNativeText);
    };

    render() {
        return (
            <Container style={{ marginTop: 0 }}>
                <Header searchBar rounded>
                    <Item>
                        <Icon name="ios-search" />
                        <Input keyboardType="default" placeholder="Search" ref={this.searchTextField}/>
                    </Item>
                    <Button transparent onPress={this.handleSearchBtnClick}>
                        <Text>Search</Text>
                    </Button>
                </Header>
                <Button onPress={() => this.props.navigation.navigate('Profile', { name: "Shohei Ohtani" })}>
                    <Text>Search</Text>
                </Button>
            </Container>
        );
    }
}

export default SearchScreen;