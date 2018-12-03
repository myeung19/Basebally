import React from 'react';
import InputBase from '@material-ui/core/InputBase';
import IconButton from "@material-ui/core/es/IconButton/IconButton";
import SearchIcon from '@material-ui/icons/Search';

import "./SearchBar.css"

let textFieldRef = React.createRef();

const searchBar = (props) => {
    return (
        <div className="SearchBar">
                <InputBase
                    inputRef={(ref) => textFieldRef = ref}
                    className="searchTextField"
                    placeholder="Firstname, then Lastname"
                    onKeyPress={(e) => props.searchBtnOnKeyPress(e, textFieldRef)}
                />
                <div className="searchBtn">
                <IconButton
                    disabled={props.btnDisabled}
                    onClick={() => props.searchBtnOnClick(textFieldRef)}
                >
                    <SearchIcon/>
                </IconButton>
            </div>
        </div>
    );
};

export default searchBar;
