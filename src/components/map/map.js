import React from 'react';
import Button from '@material-ui/core/Button';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Icon from '@material-ui/core/Icon';
import './map.css';

const MapLeaflet = ({left, setOpenLeft, right, setOpenRight, setOpenModal}) => {

    return (
        <div className="map-container">
            <div className={`button-left-panel-container ${left ? "open" : ""}`}>
                <Button
                    variant="outlined"
                    color="secondary"
                    onClick={setOpenLeft}
                    endIcon={left ? <ArrowBackIosIcon /> : <ArrowForwardIosIcon />}
                >
                .
                </Button>
            </div>
            {/* <div>
                <Button
                    variant="outlined"
                    color="secondary"
                    onClick={setOpenModal}
                >
                    <Icon className="fa fa-plus-circle" color="secondary" />
                </Button>
            </div> */}
            
            {/* <div className={`button-right-panel-container ${right ? "open" : ""}`}>
                <Button
                    variant="outlined"
                    color="primary"
                    onClick={setOpenRight}
                    endIcon={right ? <ArrowForwardIosIcon /> : <ArrowBackIosIcon />}
                >
                .
                </Button>
            </div> */}
        </div>
    )
}

export default MapLeaflet;
