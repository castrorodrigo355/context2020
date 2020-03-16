import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import './drawerRight.css';

const DrawerRight = () => {

    return (
        <div className="panel-right"
        >
            <IconButton color="inherit">
                <AccountCircleIcon/>
            </IconButton>
        </div>
    )
}

export default DrawerRight;
