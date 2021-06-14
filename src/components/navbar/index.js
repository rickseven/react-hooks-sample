/**
 * File: d:\Projects\Ekuid\react-hooks-sample\src\components\navbar\index.js
 * Project: d:\Projects\Ekuid\react-hooks-sample
 * Created Date: Wednesday, June 9th 2021, 8:32:17 pm
 * Author: Moh Eric
 * -----
 * Last Modified:
 * Modified By:
 * -----
 * Copyright (c) 2021 RICKSEVEN
 * ------------------------------------
 * Javascript will save your soul!
 */

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Search from '../search';

const Navbar = (props) => {

    const searchEnabled = props.searchEnabled && props.searchEnabled === true;
    const title = props.title && props.title !== "" ? props.title : "";

    return (
        <AppBar data-testid="navbar-component" position="sticky">
            <Toolbar data-testid="toolbar-component">
                {
                    (searchEnabled) ? (
                        <Search fnSearch={props.fnSearch} state={props.state} globalDispatch={props.globalDispatch} />
                    ) : (title !== "") ? (
                        <span data-testid="navbar-title">{title}</span>
                    ) : ""
                }
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;

