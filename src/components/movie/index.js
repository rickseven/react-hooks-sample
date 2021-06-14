/**
 * File: d:\Projects\Ekuid\react-hooks-sample\src\components\movie\index.js
 * Project: d:\Projects\Ekuid\react-hooks-sample
 * Created Date: Wednesday, June 9th 2021, 12:21:35 am
 * Author: Moh Eric
 * -----
 * Last Modified: Mon Jun 14 2021
 * Modified By: Moh Eric
 * -----
 * Copyright (c) 2021 RICKSEVEN
 * ------------------------------------
 * Javascript will save your soul!
 */

import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import defaultImage from "../../assets/default-movie.png";

const useStyles = makeStyles((theme) => ({
    poster: {
        height: 330,
        width: 220,
        borderRadius: "inherit"
    },
    paper: {
        height: 370,
        width: 220,
    },
    title: {
        paddingLeft: 12,
        paddingRight: 12,
        fontWeight: "bold"
    }
}));

const Movie = ({ movie }) => {

    const classes = useStyles();
    const poster = movie.Poster === "N/A" ? defaultImage : movie.Poster;

    return (
        <Paper className={classes.paper} title={movie.Title}>
            <img
                className={classes.poster}
                src={poster}
                alt="Poster"
            />
            <Typography noWrap variant="subtitle1" className={classes.title} gutterBottom >
                {movie.Title}
            </Typography>
        </Paper>
    );
}

export default Movie;
