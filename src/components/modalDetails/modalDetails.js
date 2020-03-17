import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import DvrIcon from '@material-ui/icons/Dvr';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import "./modalDetails.css";

const ModalService = ({openModalDetails, handleClose, selectedCourse}) => {

    return (
        <Dialog open={openModalDetails}
                onClose={handleClose}>
            <div className="modal-details-container">
                <div className="modal-details-header">
                    { selectedCourse && selectedCourse.name } 
                    <IconButton aria-label="close" color="inherit" onClick={handleClose}>
                        <CloseIcon/>
                    </IconButton>
                </div>
                <hr/>
                <div className="modal-details-subtitle">
                    { selectedCourse && `Estimación: ${selectedCourse.hours} Hrs` }
                </div>
                <div className="modal-details-content">
                    {
                        selectedCourse && selectedCourse.classes.map((c, i) => {
                            return(
                                <div className="item-class" key={i}>
                                    {`${i+1}. ${c.topic}`}
                                </div>
                            )
                        })
                    }
                </div>
                <div className="modal-details-footer">
                    { selectedCourse && <DvrIcon fontSize="large"/> }
                </div>
            </div>
        </Dialog>
    )
}

export default ModalService;
