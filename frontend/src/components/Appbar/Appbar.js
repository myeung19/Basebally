import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from "@material-ui/core/es/IconButton/IconButton";
import MenuIcon from '@material-ui/icons/Menu';

import './Appbar.css'
import {withStyles} from "@material-ui/core";

const styles = {
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: "auto",
        marginRight: -12,
    },
};

const appBar = (props) => {
    const { classes } = props;
    return (
        <div className={classes.root}>
            <AppBar position="static" color="default">
                <Toolbar>
                    <h2>I am a appbar</h2>
                    <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default withStyles(styles)(appBar);