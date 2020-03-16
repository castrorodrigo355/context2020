import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import "./leftPanelButton.css"

const LeftPanelButton = ({left, setOpenLeft}) => {

    return (
        <div className="button-left2"
             onClick={() => setOpenLeft()}
        >
            <IconButton color="inherit">
                {left ? <ChevronLeftIcon/> : <ChevronRightIcon/>}
            </IconButton>
        </div>
    )
}

export default LeftPanelButton;
