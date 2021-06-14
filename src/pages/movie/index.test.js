/**
 * File: d:\Projects\Ekuid\react-hooks-sample\src\pages\movie\index.test.js
 * Project: d:\Projects\Ekuid\react-hooks-sample
 * Created Date: Sunday, June 13th 2021, 4:04:15 pm
 * Author: Moh Eric
 * -----
 * Last Modified: Mon Jun 14 2021
 * Modified By: Moh Eric
 * -----
 * Copyright (c) 2021 RICKSEVEN
 * ------------------------------------
 * Javascript will save your soul!
 */

import { render, screen, within } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import MoviePage from '../../pages/movie';

test('should show search component on navbar', () => {

    const globalState = {
        movieSearch: {
            searchText: "",
            currentPage: 1
        }
    }

    render(<MoviePage state={globalState} dispatch={jest.fn()} />);
    const moviePage = screen.getByTestId('movie-page');
    const searchComponent = within(moviePage).getByTestId('search-component');

    expect(searchComponent).toBeInTheDocument();
});