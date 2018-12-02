import React, {Component} from 'react';
import GameCard from '../../../components/Card/GameCard/GameCard'
import RefreshBar from '../../../components/Appbar/RefreshBar/RefreshBar';

import './LivePage.css'

class LivePage extends Component {
    render() {
        return (
            <div className="LivePage">
                <RefreshBar/>
                <div className="livePageContent">
                    <GameCard data={null}/>
                </div>
            </div>
        );
    }
}

export default LivePage;