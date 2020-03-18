import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import './floatingButton.css';

const FloatingButton = ({setOpenProfile}) => {

    return (
        <div className="floating-button-container" onClick={setOpenProfile}>
            <IconButton color="inherit">
                <AccountCircleIcon/>
            </IconButton>
        </div>
    )
}

export default FloatingButton;
