/**
 * File: d:\Projects\Ekuid\react-hooks-sample\src\components\pagination\index.js
 * Project: d:\Projects\Ekuid\react-hooks-sample
 * Created Date: Thursday, June 10th 2021, 11:00:26 pm
 * Author: Moh Eric
 * -----
 * Last Modified: Sun Jun 13 2021
 * Modified By: Moh Eric
 * -----
 * Copyright (c) 2021 RICKSEVEN
 * ------------------------------------
 * Javascript will save your soul!
 */

import Pagination from '@material-ui/lab/Pagination';
import { actions } from '../../hooks';

const Paginations = (props) => {

    const { searchText, currentPage, data } = props.state;
    const perPage = 10;
    const totalPage = Math.ceil(data.totalResults / perPage);
    const handleChange = (_, value) => {
        props.state.currentPage = value;
        props.globalDispatch({ type: actions.MOVIE_SEARCH, data: props.state });
        props.fnSearch(searchText, value);
    };

    return (
        <Pagination data-testid="pagination-component" count={totalPage} page={currentPage} onChange={handleChange} variant="outlined" color="primary" />
    );
}

export default Paginations;