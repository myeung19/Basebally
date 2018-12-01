import React from 'react';
import InputBase from '@material-ui/core/InputBase';

import "./SearchBar.css"
import IconButton from "@material-ui/core/es/IconButton/IconButton";
import SearchIcon from '@material-ui/icons/Search';

const searchBar = (props) => {
    let textFieldRef = React.createRef();

    return (
        <div className="SearchBar">
            <InputBase
                inputRef={ref => textFieldRef = ref}
                className="searchTextField"
                placeholder="Firstname, then Lastname"
            />
            <div className="searchBtn">
                <IconButton onClick={() => props.searchBtnOnClick(textFieldRef)}>
                    <SearchIcon/>
                </IconButton>
            </div>
        </div>
    );
};

export default searchBar;
