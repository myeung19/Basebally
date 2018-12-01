import React, {Component} from 'react';
import axios from 'axios'
import SearchBar from '../../../components/Appbar/SearchBar/SearchBar'

class SearchPage extends Component {
    state = {

    };

    handleSearchBtnClick = (textFieldRef) => {
        console.log(textFieldRef.value);
        let playerNames = textFieldRef.value.split(" ");
        this.getPlayerStats(`${playerNames[0]}-${playerNames[1]}`);
    };

    getPlayerStats(playerName) {
        axios.get(`http://www.basebally.net/api/playerStats?player=${playerName}`)
            .then((response) => {
                console.log(response.data);
            })
    }

    render() {
        return (
            <>
                <SearchBar searchBtnOnClick={this.handleSearchBtnClick}/>
            </>
        );
    }
}

export default SearchPage;