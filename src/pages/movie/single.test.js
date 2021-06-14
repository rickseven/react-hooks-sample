/**
 * File: d:\Projects\Ekuid\react-hooks-sample\src\pages\movie\single.test.js
 * Project: d:\Projects\Ekuid\react-hooks-sample
 * Created Date: Sunday, June 13th 2021, 5:30:36 pm
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
import MovieSinglePage from '../../pages/movie/single';
import ReactRouter from 'react-router';

test('should show navbar component', () => {

    jest.spyOn(ReactRouter, 'useParams').mockReturnValue({ id: 'tt1520211' });
    render(<MovieSinglePage title="The Walking Dead" />);
    const movieSinglePage = screen.getByTestId('movie-single-page');
    const navbarComponent = within(movieSinglePage).getByTestId('navbar-component');

    expect(navbarComponent).toBeInTheDocument();
});
