import React from 'react';
import './RefreshBar.css';
import RefreshIcon from '@material-ui/icons/Refresh';
import IconButton from "@material-ui/core/es/IconButton/IconButton";

const refreshBar = () => {
    return (
        <div className="RefreshBar">
            <IconButton className="refreshBtn">
                <RefreshIcon />
            </IconButton>
        </div>
    );
};

export default refreshBar;
