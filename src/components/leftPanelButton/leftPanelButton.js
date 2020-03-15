import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import "./leftPanelButton.css"

const LeftPanelButton = ({setOpenLeft}) => {

    return (
        <div className="button-left"
             onClick={() => setOpenLeft()}
        >
            <IconButton color="inherit">
                <ChevronRightIcon/>
            </IconButton>
        </div>
    )
}

export default LeftPanelButton;
