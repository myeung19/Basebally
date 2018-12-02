import React, {Component} from 'react';
import axios from 'axios';
import CircularProgress from '@material-ui/core/CircularProgress';
import SearchBar from '../../../components/Appbar/SearchBar/SearchBar';
import ResultCard from '../../../components/Card/ResultCard/ResultCard';
import ProfileDialog from '../../../components/Dialog/ProfileDialog/ProfileDialog'

import './SearchPage.css'

class SearchPage extends Component {
    state = {
        data: [],
        selectedIndex: -1,
        isError: false,
        isLoading: false,
        isSearchBtnDisabled: false,
        isDialogOpened: false,
    };

    handleSearchBtnClick = (textFieldRef) => {
        this.getPlayerStats(textFieldRef);
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

    handleSearchBtnOnKeyPress = (event, textFieldRef) => {
        if (event.key === 'Enter') {
            this.getPlayerStats(textFieldRef);
        }
    };

    getPlayerStats(textFieldRef) {
        let playerNames = textFieldRef.value.split(" ");
        this.setState({
            isLoading: true,
            isSearchBtnDisabled: true,
        });

        axios.get(`http://www.basebally.net/api/playerStats?player=${playerNames[0]}-${playerNames[1]}`)
            .then((response) => {
                const data = [{...response.data}];
                // console.log(data);

                this.setState({
                    isError: data[0].error !== undefined,
                    isLoading: false,
                    isSearchBtnDisabled: false,
                    data: [{...response.data}]
                })
            });
    }

    render() {
        const {data, selectedIndex, isError, isLoading, isSearchBtnDisabled, isDialogOpened} = this.state;

        return (
            <div className="SearchPage">
                <SearchBar
                    btnDisabled={isSearchBtnDisabled}
                    searchBtnOnClick={this.handleSearchBtnClick}
                    searchBtnOnKeyPress={this.handleSearchBtnOnKeyPress}/>
                {isLoading ?
                    <div className="loadingComponent">
                        <CircularProgress/>
                    </div> : null
                }
                {
                    isError ?
                        <p>Player not found</p> : null
                }
                {
                    data.length !== 0 && isLoading !== true && !isError ?
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
            </div>
        );
    }
}

export default SearchPage;