/**
 * File: d:\Projects\Ekuid\react-hooks-sample\src\components\pagination\index.test.js
 * Project: d:\Projects\Ekuid\react-hooks-sample
 * Created Date: Sunday, June 13th 2021, 5:06:21 pm
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
import Paginations from '../pagination';

test('should show pagination component', () => {

    const state = {
        searchText: "",
        currentPage: 1,
        data: {
            totalResults: 100
        }
    };

    render(<Paginations state={state} />);
    const paginationComponent = screen.getByTestId('pagination-component');

    expect(paginationComponent).toBeInTheDocument();
});
