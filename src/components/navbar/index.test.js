/**
 * File: d:\Projects\Ekuid\react-hooks-sample\src\components\navbar\index.test.js
 * Project: d:\Projects\Ekuid\react-hooks-sample
 * Created Date: Sunday, June 13th 2021, 4:11:46 pm
 * Author: Moh Eric
 * -----
 * Last Modified: Sun Jun 13 2021
 * Modified By: Moh Eric
 * -----
 * Copyright (c) 2021 RICKSEVEN
 * ------------------------------------
 * Javascript will save your soul!
 */

import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Navbar from '../navbar';

test('should show search feature when search option enabled', () => {

    const state = {
        searchText: "",
        currentPage: 1
    }

    render(<Navbar searchEnabled={true} state={state} fnSearch={jest.fn()} globalDispatch={jest.fn()} />);
    const searchComponent = screen.getByTestId('search-component');

    expect(searchComponent).toBeInTheDocument();
});