import React from 'react';
import Appbar from '../../../components/Appbar/Appbar'
import BottomNavigationBar from '../../../components/Navigation/BottomNavigationBar/BottomNavigationBar'
import LivePage from '../../Page/LivePage/LivePage';
import RankingPage from '../../Page/RankingPage/RankingPage';
import SearchPage from '../../Page/SearchPage/SearchPage'

import './MainLayout.css';

class MainLayout extends React.Component {
    state = {
        pageValue: 0,
    };

    handleChange = (event, value) => {
        this.setState({
            pageValue: value
        });
    };

    render() {
        let page = null;
        switch (this.state.pageValue) {
            case 0:
                page = <LivePage/>;
                break;
            case 1:
                page = <RankingPage/>;
                break;
            case 2:
                page = <SearchPage/>;
                break;
        }

        return (
            <div className="container">
                <Appbar/>
                {page}
                <BottomNavigationBar value={this.state.pageValue} onChange={this.handleChange}/>
            </div>
        );
    }
}

export default MainLayout;