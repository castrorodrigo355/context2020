import React, { useState } from 'react';
import IconButton from '@material-ui/core/IconButton';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import './floatingButton.css';

const FloatingButton = ({setOpenModal}) => {

    const handleFloatingButton = () => {
        setOpenModal();
    }

    return (
        <div className="floating-button-container"
             onClick={() => handleFloatingButton()}
        >
            <IconButton color="inherit">
                <AccountCircleIcon/>
            </IconButton>
        </div>
    )
}

export default FloatingButton;
