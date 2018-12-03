import React, {Component} from 'react';
import { Container, Header, Item, Input, Icon, Button, Text } from 'native-base';

class SearchPage extends Component {
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
            <Container>
                <Header searchBar rounded>
                    <Item>
                        <Icon name="ios-search" />
                        <Input keyboardType="default" placeholder="Search" ref={this.searchTextField}/>
                    </Item>
                    <Button transparent onPress={this.handleSearchBtnClick}>
                        <Text>Search</Text>
                    </Button>
                </Header>
            </Container>
        );
    }
}

export default SearchPage;