import React from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import LiveIcon from '@material-ui/icons/RssFeed';
import StandingsIcon from '@material-ui/icons/Toc';
import SearchIcon from '@material-ui/icons/Search';

import './BottomNavigationBar.css'

const bottomNavigationBar = (props) => {
    return (
        <div className="navBar">
            <BottomNavigation
                value={props.value}
                onChange={props.onChange}
                showLabels
            >
                <BottomNavigationAction label="Live" value="Live" icon={<LiveIcon/>}/>
                <BottomNavigationAction label="Standings" value="Standings" icon={<StandingsIcon/>}/>
                <BottomNavigationAction label="Search" value="Search" icon={<SearchIcon/>}/>
            </BottomNavigation>
        </div>
    );

}

export default bottomNavigationBar;