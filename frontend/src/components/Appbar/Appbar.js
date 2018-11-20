import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from "@material-ui/core/es/IconButton/IconButton";
import MenuIcon from '@material-ui/icons/Menu';

import './Appbar.css'

const appBar = (props) => {
    return (
        <AppBar position="static" color="default">
            <Toolbar>
                <h2>I am a appbar</h2>
                <IconButton className="settingBtn">
                    <MenuIcon/>
                </IconButton>
            </Toolbar>
        </AppBar>
    );
};

export default appBar;