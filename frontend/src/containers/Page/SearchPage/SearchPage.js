import React, {Component} from 'react';
import axios from 'axios';
import CircularProgress from '@material-ui/core/CircularProgress';
import SearchBar from '../../../components/Appbar/SearchBar/SearchBar';
import ResultCard from '../../../components/Card/ResultCard/ResultCard';
import ProfileDialog from '../../../components/Dialog/ProfileDialog/ProfileDialog'

class SearchPage extends Component {
    state = {
        data: [],
        selectedIndex: -1,
        isLoading: false,
        isSearchBtnDisabled: false,
        isDialogOpened: false,
    };

    handleSearchBtnClick = (textFieldRef) => {
        console.log(textFieldRef);
        console.log(textFieldRef.value);
        let playerNames = textFieldRef.value.split(" ");
        this.setState({
            isLoading: true,
            isSearchBtnDisabled: true,
        });

        this.getPlayerStats(`${playerNames[0]}-${playerNames[1]}`);
    };

    handleResultCardOnClick = (index) => {
        console.log("handleResultCardOnClick - ", index);
        this.setState({
            selectedIndex: index,
            isDialogOpened: true
        })
    };

    handleDialogClosed = () => {
        const isDialogOpened = this.state.isDialogOpened;
        this.setState({
            isDialogOpened: !isDialogOpened
        })
    };

    getPlayerStats(playerName) {
        axios.get(`http://www.basebally.net/api/playerStats?player=${playerName}`)
            .then((response) => {
                this.setState({
                    isLoading: false,
                    isSearchBtnDisabled: false,
                    data: [{...response.data}]
                })
            });
    }

    render() {
        const {data, selectedIndex, isLoading, isSearchBtnDisabled, isDialogOpened} = this.state;

        return (
            <>
                <SearchBar
                    btnDisabled={isSearchBtnDisabled}
                    searchBtnOnClick={this.handleSearchBtnClick}/>
                { isLoading ?
                    <CircularProgress /> : null
                }
                {
                    data.length !== 0 ?
                        data.map((el, index) => {
                            const bio = el.playerProfile.bio;

                            return (
                                <ResultCard
                                    key={index}
                                    team={bio.team}
                                    name={bio.FirstName + " " + bio.LastName}
                                    jerseyNumber={bio.JerseyNumber}
                                    resultCardOnClick={() => this.handleResultCardOnClick(index)}
                                />
                            );
                        }) : null
                }
                {
                    isDialogOpened ?
                        <ProfileDialog
                            data={data[selectedIndex]}
                            isDialogOpened={isDialogOpened}
                            handleClose={this.handleDialogClosed}/>
                        : null
                }
            </>
        );
    }
}

export default SearchPage;