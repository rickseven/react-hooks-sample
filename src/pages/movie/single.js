/**
 * File: d:\Projects\Ekuid\react-hooks-sample\src\pages\movie\single.js
 * Project: d:\Projects\Ekuid\react-hooks-sample
 * Created Date: Wednesday, June 9th 2021, 9:05:20 pm
 * Author: Moh Eric
 * -----
 * Last Modified: Mon Jun 14 2021
 * Modified By: Moh Eric
 * -----
 * Copyright (c) 2021 RICKSEVEN
 * ------------------------------------
 * Javascript will save your soul!
 */

import { useState, useEffect } from "react";
import { useParams } from 'react-router';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useMovieDetail } from '../../hooks';
import Navbar from '../../components/navbar';
import MovieDetail from '../../components/movie/detail';

const useStyles = makeStyles(() => ({
    content: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: 300
    }
}));

const MovieSinglePage = () => {

    const classes = useStyles();
    const [initialized, setInitialized] = useState(false);
    const { id } = useParams();
    const [state, fnGetDetail] = useMovieDetail({ currentId: null });
    const data = state.data;

    useEffect(() => {
        if (!initialized) {
            fnGetDetail(id);
            setInitialized(true);
        }
    }, [initialized, fnGetDetail, id]);

    return (
        <div data-testid="movie-single-page">
            <Navbar title={data.Title} />
            <div className={classes.content}>
                {
                    state.loading && !state.errorMessage ? (
                        <span>
                            <CircularProgress />
                            <p>Loading...</p>
                        </span>
                    ) : state.errorMessage ? (
                        <div>{state.errorMessage}</div>
                    ) : (
                        <MovieDetail movie={data} />
                    )
                }
            </div>
        </div>
    );
}

export default MovieSinglePage;
