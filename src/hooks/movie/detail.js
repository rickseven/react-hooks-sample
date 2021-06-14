/**
 * File: d:\Projects\Ekuid\react-hooks-sample\src\hooks\movie\detail.js
 * Project: d:\Projects\Ekuid\react-hooks-sample
 * Created Date: Friday, June 11th 2021, 10:24:54 pm
 * Author: Moh Eric
 * -----
 * Last Modified: Sat Jun 12 2021
 * Modified By: Moh Eric
 * -----
 * Copyright (c) 2021 RICKSEVEN
 * ------------------------------------
 * Javascript will save your soul!
 */

import { useEffect, useReducer } from "react";
import services from '../../services';

const useMovieDetail = (initial) => {

    const MOVIE_DETAIL_REQUEST = "MOVIE_DETAIL_REQUEST";
    const MOVIE_DETAIL_SUCCESS = "MOVIE_DETAIL_SUCCESS";
    const MOVIE_DETAIL_FAILURE = "MOVIE_DETAIL_FAILURE";

    const reducer = (state = {}, action) => {
        switch (action.type) {
            case MOVIE_DETAIL_REQUEST:
                return {
                    ...state,
                    action: action.type,
                    loading: true,
                    currentId: action.id,
                    errorMessage: null
                };
            case MOVIE_DETAIL_SUCCESS:
                return {
                    ...state,
                    action: action.type,
                    loading: false,
                    data: JSON.parse(JSON.stringify(action.payload))
                };
            case MOVIE_DETAIL_FAILURE:
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
        currentId: initial.currentId,
        data: {},
        errorMessage: null
    });

    const getDetail = async () => {
        await services.getMovieById(state.currentId)
            .then(res => {
                if (res.data.Response === "True") {
                    dispatch({ type: MOVIE_DETAIL_SUCCESS, payload: res.data });
                } else {
                    dispatch({ type: MOVIE_DETAIL_FAILURE, error: res.data.Error });
                }
            })
            .catch(err => {
                dispatch({ type: MOVIE_DETAIL_FAILURE, error: err.message })
            });
    };

    useEffect(() => {
        if (state.action === MOVIE_DETAIL_REQUEST) {
            getDetail();
        }
    });

    const fnGetDetail = (id) => {
        dispatch({ type: MOVIE_DETAIL_REQUEST, id: id });
    };

    return [state, fnGetDetail];
}

export default useMovieDetail;