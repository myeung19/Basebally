import React from 'react';
import BottomNavigationBar from '../../../components/Navigation/BottomNavigationBar/BottomNavigationBar'
import LivePage from '../../Page/LivePage/LivePage';
import StandingsPage from '../../Page/StandingsPage/StandingsPage';
import SearchPage from '../../Page/SearchPage/SearchPage'

import './MainLayout.css';

class MainLayout extends React.Component {
    state = {
        currentPage: "Search",
    };

    handleChange = (event, value) => {
        this.setState({
            currentPage: value
        });
    };

    render() {
        let page = null;
        switch (this.state.currentPage) {
            case "Game":
                page = <LivePage/>;
                break;
            case "Standings":
                page = <StandingsPage/>;
                break;
            case "Search":
                page = <SearchPage/>;
                break;
        }

        return (
            <div className="container">
                    {page}
                <BottomNavigationBar value={this.state.currentPage} onChange={this.handleChange}/>
            </div>
        );
    }
}

export default MainLayout;