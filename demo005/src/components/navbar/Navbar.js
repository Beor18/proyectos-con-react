import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

const NavBar = () => {
    return(
        <div>
        <AppBar position="static">
            <Toolbar>
                Ejemplo de React Material UI y Draft.js
            </Toolbar>
        </AppBar>
        </div>
    )
}
export default NavBar;