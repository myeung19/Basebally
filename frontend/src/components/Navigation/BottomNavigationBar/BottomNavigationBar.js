import React from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';

import './BottomNavigationBar.css'

const bottomNavigationBar = (props) => {
    return (
        <div className="navBar">
            <BottomNavigation
                value={props.value}
                onChange={props.onChange}
                showLabels
            >
                <BottomNavigationAction label="Recents" icon={<RestoreIcon/>}/>
                <BottomNavigationAction label="Favorites" icon={<FavoriteIcon/>}/>
                <BottomNavigationAction label="Nearby" icon={<LocationOnIcon/>}/>
            </BottomNavigation>
        </div>
    );

}

export default bottomNavigationBar;