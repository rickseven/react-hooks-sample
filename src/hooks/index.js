/**
 * File: d:\Projects\Ekuid\react-hooks-sample\src\hooks\index.js
 * Project: d:\Projects\Ekuid\react-hooks-sample
 * Created Date: Friday, June 11th 2021, 8:21:16 pm
 * Author: Moh Eric
 * -----
 * Last Modified: Sun Jun 13 2021
 * Modified By: Moh Eric
 * -----
 * Copyright (c) 2021 RICKSEVEN
 * ------------------------------------
 * Javascript will save your soul!
 */

import { useReducer } from "react";

const actions = {
    MOVIE_SEARCH: "MOVIE_SEARCH"
};

const useGlobal = () => {

    const reducer = (state = {}, action) => {
        switch (action.type) {
            case actions.MOVIE_SEARCH:
                return {
                    ...state,
                    action: action.type,
                    movieSearch: action.data
                };
            default:
                return state
        }
    }

    const [state, dispatch] = useReducer(reducer, {
        action: null,
        movieSearch: null
    });

    return [state, dispatch];
}

export { useGlobal, actions };
export { useMovieSearch, useMovieDetail } from '../hooks/movie';