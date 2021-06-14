/**
 * File: d:\Projects\Ekuid\react-hooks-sample\src\services\index.js
 * Project: d:\Projects\Ekuid\react-hooks-sample
 * Created Date: Thursday, June 10th 2021, 12:24:39 am
 * Author: Moh Eric
 * -----
 * Last Modified: Fri Jun 11 2021
 * Modified By: Moh Eric
 * -----
 * Copyright (c) 2021 RICKSEVEN
 * ------------------------------------
 * Javascript will save your soul!
 */

const axios = require("axios");

const apiBaseUrl = process.env.REACT_APP_API_URL;
const apiKey = process.env.REACT_APP_API_KEY;
const apiUrl = `${apiBaseUrl}?apikey=${apiKey}`;

const searchMovie = (text, page) => axios.get(`${apiUrl}&s=${text}&page=${page}`);
const getMovieById = (id) => axios.get(`${apiUrl}&i=${id}`);

const services = {
    searchMovie,
    getMovieById
}

export default services;