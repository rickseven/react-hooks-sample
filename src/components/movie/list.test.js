/**
 * File: d:\Projects\Ekuid\react-hooks-sample\src\components\movie\list.test.js
 * Project: d:\Projects\Ekuid\react-hooks-sample
 * Created Date: Sunday, June 13th 2021, 4:37:16 pm
 * Author: Moh Eric
 * -----
 * Last Modified: Sun Jun 13 2021
 * Modified By: Moh Eric
 * -----
 * Copyright (c) 2021 RICKSEVEN
 * ------------------------------------
 * Javascript will save your soul!
 */

import { render, screen, within } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import MovieList from '../movie/list';

test('should show a message "Data not available" when data empty', () => {

    const movies = [];

    render(<MovieList data={movies} />);
    const movieListComponent = screen.getByTestId('movie-list-component');
    const message = within(movieListComponent).getByText('Data not available');

    expect(message).toBeInTheDocument();
});
