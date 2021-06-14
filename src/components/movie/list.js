/**
 * File: d:\Projects\Ekuid\react-hooks-sample\src\components\movie\list.js
 * Project: d:\Projects\Ekuid\react-hooks-sample
 * Created Date: Thursday, June 10th 2021, 12:45:09 am
 * Author: Moh Eric
 * -----
 * Last Modified: Sun Jun 13 2021
 * Modified By: Moh Eric
 * -----
 * Copyright (c) 2021 RICKSEVEN
 * ------------------------------------
 * Javascript will save your soul!
 */

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Movie from '../movie'

const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1,
        marginTop: 16,
        marginBottom: 16
    },
    item: {
        margin: 8,
    },
    link: {
        textDecoration: 'none'
    }
}));

const MovieList = (props) => {

    const classes = useStyles();
    const movies = props.data;

    return (
        <Grid data-testid="movie-list-component" container justify="center" className={classes.root}>
            {
                (movies.length > 0)
                    ?
                    movies.map((value) => (
                        <Grid key={value.imdbID} item className={classes.item} >
                            <a href={'#/' + value.imdbID} className={classes.link}><Movie movie={value} /></a>
                        </Grid>
                    ))
                    :
                    <span>Data not available</span>
            }
        </Grid>
    );
}

export default MovieList;
