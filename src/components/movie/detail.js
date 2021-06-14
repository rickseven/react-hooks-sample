/**
 * File: d:\Projects\Ekuid\react-hooks-sample\src\components\movie\detail.js
 * Project: d:\Projects\Ekuid\react-hooks-sample
 * Created Date: Wednesday, June 9th 2021, 10:09:17 pm
 * Author: Moh Eric
 * -----
 * Last Modified: Mon Jun 14 2021
 * Modified By: Moh Eric
 * -----
 * Copyright (c) 2021 RICKSEVEN
 * ------------------------------------
 * Javascript will save your soul!
 */

import { makeStyles } from '@material-ui/core/styles';
import defaultImage from "../../assets/default-movie.png";

const useStyles = makeStyles(() => ({
    root: {
        width: "100%",
        margin: "auto",
        textAlign: "left"
    },
    topContainer: {
        background: "#ddd",
        height: 120
    },
    bottomContainer: {
        position: "relative",
        width: "80%",
        margin: "auto"
    },
    bottomLeftItem: {
        minHeight: 260,
    },
    bottomRightItem: {
        padding: "24px 12px",
    },
    poster: {
        height: 330,
        width: 220,
        borderRadius: "5px",
        position: "absolute",
        top: -70,
        left: "50%",
        transform: "translate(-50%, 0)",
        boxShadow: "0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)"
    }
}));

const MovieDetail = ({ movie }) => {

    const classes = useStyles();
    const poster = movie.Poster === "N/A" ? defaultImage : movie.Poster;

    return (
        <div data-testid="movie-detail-component" className={classes.root}>
            <div className={'row ' + classes.topContainer}></div>
            <div className={'row ' + classes.bottomContainer}>
                <div className="col-12 col-md-3">
                    <div className={classes.bottomLeftItem}>
                        <img
                            className={classes.poster}
                            src={poster}
                            alt="Poster"
                        />
                    </div>
                </div>
                <div className="col-12 col-md-9">
                    <div className={classes.bottomRightItem}>
                        <div><b>Title: </b> {movie.Title}</div>
                        <div><b>Released: </b> {movie.Released}</div>
                        <div><b>Genre: </b> {movie.Genre}</div>
                        <div><b>Writer: </b> {movie.Writer}</div>
                        <div><b>Actors: </b> {movie.Actors}</div>
                        <div><b>Rating: </b> {movie.imdbRating}</div>
                        <br />
                        <div>{movie.Plot}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MovieDetail;
