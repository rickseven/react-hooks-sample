/**
 * File: d:\Projects\Ekuid\react-hooks-sample\src\components\search\index.js
 * Project: d:\Projects\Ekuid\react-hooks-sample
 * Created Date: Wednesday, June 9th 2021, 1:15:34 am
 * Author: Moh Eric
 * -----
 * Last Modified: Sun Jun 13 2021
 * Modified By: Moh Eric
 * -----
 * Copyright (c) 2021 RICKSEVEN
 * ------------------------------------
 * Javascript will save your soul!
 */

import { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import ClearIcon from "@material-ui/icons/HighlightOffOutlined";
import { actions } from '../../hooks';

const useStyles = makeStyles((theme) => ({
    root: {
        margin: theme.spacing(1),
        width: '100%',
    },
    searchInput: {
        background: '#fff',
        borderRadius: '3px',
        width: '100%'
    },
    button: {
        cursor: 'pointer'
    },
    displayContent: {
        display: 'contents'
    }
}));

const Search = (props) => {

    const classes = useStyles();
    const defaultSearchText = process.env.REACT_APP_DEFAULT_MOVIE;
    const initialState = (props.state.searchText !== defaultSearchText) ? props.state.searchText : "";
    const [searchText, setSearchText] = useState(initialState);

    const handleSearchInputChanges = (e) => {
        setSearchText(e.target.value);
    }

    const resetInputField = () => {
        setSearchText("");
        props.fnSearch(defaultSearchText, 1);
        props.state.searchText = defaultSearchText;
        props.state.currentPage = 1;
        props.globalDispatch({ type: actions.MOVIE_SEARCH, data: props.state });
    }

    const doSearch = (e) => {
        e.preventDefault();
        props.fnSearch(searchText, 1);
        props.state.searchText = searchText;
        props.state.currentPage = 1;
        props.globalDispatch({ type: actions.MOVIE_SEARCH, data: props.state });
    }

    return (
        <form className={classes.root} noValidate autoComplete="off" data-testid="search-component">
            <TextField
                value={searchText}
                onChange={handleSearchInputChanges}
                onKeyPress={(event) => {
                    if (event.key === 'Enter') {
                        doSearch(event);
                    }
                }}
                size="medium"
                className={classes.searchInput}
                variant="outlined"
                placeholder="Find some movies"
                InputProps={{
                    endAdornment: (
                        <InputAdornment>
                            {
                                (searchText === "")
                                    ?
                                    <div className={classes.button}>
                                        <SearchIcon fontSize="large" />
                                    </div>
                                    :
                                    <div className={classes.displayContent}>
                                        <span data-testid="btn-clear" className={classes.button} onClick={resetInputField}>
                                            <ClearIcon fontSize="small" />
                                        </span>&nbsp;
                                        <span className={classes.button} onClick={(event) => { doSearch(event) }}>
                                            <SearchIcon fontSize="large" />
                                        </span>
                                    </div>
                            }
                        </InputAdornment>
                    )
                }}
            />
        </form>
    );
}

export default Search;