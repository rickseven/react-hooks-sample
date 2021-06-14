/**
 * File: d:\Projects\Ekuid\react-hooks-sample\src\components\movie\detail.test.js
 * Project: d:\Projects\Ekuid\react-hooks-sample
 * Created Date: Sunday, June 13th 2021, 5:35:38 pm
 * Author: Moh Eric
 * -----
 * Last Modified: Mon Jun 14 2021
 * Modified By: Moh Eric
 * -----
 * Copyright (c) 2021 RICKSEVEN
 * ------------------------------------
 * Javascript will save your soul!
 */

import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import MovieDetail from '../movie/detail';
import defaultImage from '../../assets/default-movie.png';

test('should show default image (no image) when poster not available (N/A)', () => {

    const noImage = defaultImage;
    const movie = {
        Title: "The Walking Dead",
        Year: "2010–2022",
        Rated: "TV-14",
        Released: "31 Oct 2010",
        Runtime: "44 min",
        Genre: "Drama, Horror, Thriller",
        Director: "N/A",
        Writer: "Frank Darabont, Angela Kang",
        Actors: "Andrew Lincoln, Norman Reedus, Melissa McBride",
        Plot: "Sheriff Deputy Rick Grimes wakes up from a coma to learn the world is in ruins and must lead a group of survivors to stay alive.",
        Language: "English",
        Country: "United States",
        Awards: "Won 2 Primetime Emmys. 78 wins & 222 nominations total",
        Poster: "N/A",
        Ratings: [
            {
                Source: "Internet Movie Database",
                Value: "8.2/10"
            }
        ],
        Metascore: "N/A",
        imdbRating: "8.2",
        imdbVotes: "872,702",
        imdbID: "tt1520211",
        Type: "series",
        totalSeasons: "11",
        Response: "True"
    }

    render(<MovieDetail movie={movie} />);
    const image = screen.getByAltText('Poster');

    expect(image.src).toContain(noImage);
});
