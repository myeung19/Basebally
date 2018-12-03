import React, {Component} from 'react';
import axios from 'axios';
import GameCard from '../../../components/Card/GameCard/GameCard'
import RefreshBar from '../../../components/Appbar/RefreshBar/RefreshBar';

import './GamePage.css'

class GamePage extends Component {
    state = {
        data: []
    };

    componentDidMount() {
        this.getDataFromApi();
    }

    handleRefreshBtnOnClick = () => {
        this.getDataFromApi();
    };

    getDataFromApi() {
        axios.get("http://www.basebally.net/api/game")
            .then((response) => {
                console.log(response.data);

                this.setState({
                    data: response.data
                })
            })
    }

    render() {
        const { data } = this.state;

        return (
            <div className="LivePage">
                <RefreshBar refreshBtnOnClick={this.handleRefreshBtnOnClick}/>
                <div className="livePageContent">
                    {
                        data.length !== 0 ?
                            data.map((el, i) => {
                                return <GameCard key={i} data={ el } />
                            }) : null
                    }
                </div>
            </div>
        );
    }
}

export default GamePage;