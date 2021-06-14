/**
 * File: d:\Projects\Ekuid\react-hooks-sample\src\components\search\index.test.js
 * Project: d:\Projects\Ekuid\react-hooks-sample
 * Created Date: Sunday, June 13th 2021, 3:25:26 pm
 * Author: Moh Eric
 * -----
 * Last Modified: Sun Jun 13 2021
 * Modified By: Moh Eric
 * -----
 * Copyright (c) 2021 RICKSEVEN
 * ------------------------------------
 * Javascript will save your soul!
 */

import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Search from '../search';

test('should show clear button when input filled', () => {

    const state = {
        searchText: "",
        currentPage: 1
    }

    render(<Search fnSearch={jest.fn()} state={state} globalDispatch={jest.fn()} />);
    fireEvent.change(screen.getByPlaceholderText("Find some movies"), {
        target: { value: "girl" }
    });
    const buttonClear = screen.getByTestId('btn-clear');

    expect(buttonClear).toBeInTheDocument();
});