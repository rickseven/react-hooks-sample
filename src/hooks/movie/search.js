/**
 * File: d:\Projects\Ekuid\react-hooks-sample\src\hooks\movie\search.js
 * Project: d:\Projects\Ekuid\react-hooks-sample
 * Created Date: Friday, June 11th 2021, 10:25:31 pm
 * Author: Moh Eric
 * -----
 * Last Modified: Sun Jun 13 2021
 * Modified By: Moh Eric
 * -----
 * Copyright (c) 2021 RICKSEVEN
 * ------------------------------------
 * Javascript will save your soul!
 */

import { useEffect, useReducer } from "react";
import services from '../../services';

const useMovieSearch = (initial) => {

    const MOVIE_SEARCH_REQUEST = "MOVIE_SEARCH_REQUEST";
    const MOVIE_SEARCH_SUCCESS = "MOVIE_SEARCH_SUCCESS";
    const MOVIE_SEARCH_FAILURE = "MOVIE_SEARCH_FAILURE";

    const reducer = (state = {}, action) => {
        switch (action.type) {
            case MOVIE_SEARCH_REQUEST:
                return {
                    ...state,
                    action: action.type,
                    loading: true,
                    searchText: action.text,
                    currentPage: action.page,
                    errorMessage: null
                };
            case MOVIE_SEARCH_SUCCESS:
                return {
                    ...state,
                    action: action.type,
                    loading: false,
                    data: JSON.parse(JSON.stringify(action.payload))
                };
            case MOVIE_SEARCH_FAILURE:
                return {
                    ...state,
                    action: action.type,
                    loading: false,
                    errorMessage: action.error
                };
            default:
                return state
        }
    }

    const [state, dispatch] = useReducer(reducer, {
        action: null,
        loading: true,
        searchText: initial.searchText,
        currentPage: initial.currentPage,
        data: {},
        errorMessage: null
    });

    const doSearch = async () => {
        await services.searchMovie(state.searchText, state.currentPage)
            .then(res => {
                if (res.data.Response === "True") {
                    dispatch({ type: MOVIE_SEARCH_SUCCESS, payload: res.data });
                } else {
                    dispatch({ type: MOVIE_SEARCH_FAILURE, error: res.data.Error });
                }
            })
            .catch(err => {
                dispatch({ type: MOVIE_SEARCH_FAILURE, error: err.message })
            });
    };

    useEffect(() => {
        if (state.action === MOVIE_SEARCH_REQUEST) {
            doSearch();
        }
    });

    const fnSearch = (text = initial.searchText, page = initial.currentPage) => {
        dispatch({ type: MOVIE_SEARCH_REQUEST, text: text, page: page });
    };

    return [state, fnSearch];
}

export default useMovieSearch;