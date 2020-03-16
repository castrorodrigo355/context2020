import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faBeer } from '@fortawesome/free-solid-svg-icons'
import './floatingButton.css';

const FloatingButton = ({setOpenModal}) => {

    const handleFloatingButton = () => setOpenModal();

    return (
        <div className="floating-button-container"
             onClick={() => handleFloatingButton()}
        >
            <IconButton color="inherit">
                <AccountCircleIcon/>
                {/* <FontAwesomeIcon icon={faBeer} /> */}
            </IconButton>
        </div>
    )
}

export default FloatingButton;
