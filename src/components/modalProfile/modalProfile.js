import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DvrIcon from '@material-ui/icons/Dvr';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import "./modalProfile.css";

const ModalProfile = ({openModalProfile, handleClose, profileMessage}) => {


    const { title, subtitle, topics } = profileMessage;

    return (
        <Dialog open={openModalProfile}
                onClose={handleClose}>
            <div className="modal-profile-container">
                <div className="modal-profile-header">
                    {title}
                    <IconButton aria-label="close" color="inherit" onClick={handleClose}>
                        <CloseIcon/>
                    </IconButton>
                </div>
                <div className="modal-profile-subtitle">
                    {`${subtitle} Horas`}
                </div>
                <hr/>
                <div className="modal-profile-content">
                    {
                        topics.map((t, i) => {
                            return(
                                <div className="item-class2" key={i}>
                                    {t}
                                </div>
                            )
                        })
                    }
                </div>
                <div className="modal-profile-footer">
                    { <DvrIcon fontSize="large"/> }
                </div>
            </div>
        </Dialog>
    )
}

export default ModalProfile;
