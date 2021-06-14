/**
 * File: d:\Projects\Ekuid\react-hooks-sample\src\pages\movie\index.js
 * Project: d:\Projects\Ekuid\react-hooks-sample
 * Created Date: Wednesday, June 9th 2021, 7:43:59 am
 * Author: Moh Eric
 * -----
 * Last Modified: Sun Jun 13 2021
 * Modified By: Moh Eric
 * -----
 * Copyright (c) 2021 RICKSEVEN
 * ------------------------------------
 * Javascript will save your soul!
 */

import { useState, useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useMovieSearch } from '../../hooks';
import Navbar from '../../components/navbar';
import MovieList from '../../components/movie/list';
import Paginations from '../../components/pagination'

const useStyles = makeStyles(() => ({
    content: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: 300
    },
    pagination: {
        margin: 16,
        display: "inline-block"
    },
}));

const MoviePage = (props) => {

    const classes = useStyles();
    const defaultSearchText = process.env.REACT_APP_DEFAULT_MOVIE;
    const globalState = props.state;
    const globalDispatch = props.dispatch;
    const searchText = globalState.movieSearch !== null ? globalState.movieSearch.searchText : defaultSearchText;
    const currentPage = globalState.movieSearch !== null ? globalState.movieSearch.currentPage : 1;
    const [initialized, setInitialized] = useState(false);
    const [state, fnSearch] = useMovieSearch({ searchText: searchText, currentPage: currentPage });

    useEffect(() => {
        if (!initialized) {
            fnSearch();
            setInitialized(true);
        }
    }, [initialized, fnSearch]);

    return (
        <div data-testid="movie-page">
            <Navbar searchEnabled={true} state={state} fnSearch={fnSearch} globalDispatch={globalDispatch}/>
            <div className={classes.content}>
                {
                    state.loading && !state.errorMessage ? (
                        <span>
                            <CircularProgress/>
                            <p>Loading...</p>
                        </span>
                    ) : state.errorMessage ? (
                        <div>{state.errorMessage}</div>
                    ) : (
                        <MovieList data={state.data.Search} />
                    )
                }
            </div>
            <div className={classes.pagination}>
                {
                    !state.loading && !state.errorMessage ? (
                        <Paginations state={state} fnSearch={fnSearch} globalDispatch={globalDispatch} />
                    ) : ""
                }
            </div>
        </div>
    );
}

export default MoviePage;