import React from 'react';
import Appbar from '../../../components/Appbar/Appbar'
import BottomNavigationBar from '../../../components/Navigation/BottomNavigationBar/BottomNavigationBar'
import LivePage from '../../Page/LivePage/LivePage';
import RankingPage from '../../Page/RankingPage/RankingPage';
import SearchPage from '../../Page/SearchPage/SearchPage'

import './MainLayout.css';

class MainLayout extends React.Component {
    state = {
        currentPage: "Live",
    };

    handleChange = (event, value) => {
        this.setState({
            currentPage: value
        });
    };

    render() {
        let page = null;
        switch (this.state.currentPage) {
            case "Live":
                page = <LivePage/>;
                break;
            case "Standings":
                page = <RankingPage/>;
                break;
            case "Search":
                page = <SearchPage/>;
                break;
        }

        return (
            <div className="container">
                <Appbar pageName={this.state.currentPage}/>
                    {page}
                <BottomNavigationBar value={this.state.currentPage} onChange={this.handleChange}/>
            </div>
        );
    }
}

export default MainLayout;