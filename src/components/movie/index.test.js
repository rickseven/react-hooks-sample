/**
 * File: d:\Projects\Ekuid\react-hooks-sample\src\components\movie\index.test.js
 * Project: d:\Projects\Ekuid\react-hooks-sample
 * Created Date: Sunday, June 13th 2021, 4:22:41 pm
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
import Movie from '../movie';
import defaultImage from '../../assets/default-movie.png';

test('should show default image (no image) when poster not available (N/A)', () => {

    const noImage = defaultImage;
    const movie = {
        Title: "The Walking Dead",
        Year: "2010–2022",
        imdbID: "tt1520211",
        Type: "series",
        Poster: "N/A"
    }

    render(<Movie movie={movie} />);
    const image = screen.getByAltText('Poster');

    expect(image.src).toContain(noImage);
});
