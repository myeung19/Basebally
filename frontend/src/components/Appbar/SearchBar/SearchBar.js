import React from 'react';
import InputBase from '@material-ui/core/InputBase';

import "./SearchBar.css"
import IconButton from "@material-ui/core/es/IconButton/IconButton";
import SearchIcon from '@material-ui/icons/Search';

const searchBar = props => {
    return (
        <div className="SearchBar">
            <InputBase
                className="searchTextField"
                placeholder="firstname, then lastname"
            />
            <div className="searchBtn">
                <IconButton>
                    <SearchIcon/>
                </IconButton>
            </div>
        </div>
    );
};

export default searchBar;
