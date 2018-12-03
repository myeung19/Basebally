import React from 'react';
import './RefreshBar.css';
import RefreshIcon from '@material-ui/icons/Refresh';
import IconButton from "@material-ui/core/es/IconButton/IconButton";

const refreshBar = (props) => {
    return (
        <div className="RefreshBar">
            <IconButton className="refreshBtn" onClick={props.refreshBtnOnClick}>
                <RefreshIcon />
            </IconButton>
        </div>
    );
};

export default refreshBar;
