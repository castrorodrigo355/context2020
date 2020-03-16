import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import "./modalProfile.css";

const useStyles = makeStyles(theme => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '1px solid #000',
        padding: theme.spacing(2, 4, 3),
        height: "200px"
    },
}));

const ModalProfile = ({openModalProfile, handleClose, profileMessage}) => {

    const classes = useStyles();

    const { title, subtitle, topics } = profileMessage;

    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={classes.modal}
            open={openModalProfile}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{timeout: 500}}
        >
            <Fade in={openModalProfile}>
                <div className={classes.paper}>
                    <h2 id="transition-modal-title">{`Presentación: ${title}`}</h2>
                    <p id="transition-modal-description">{`Cursos: ${subtitle} Horas`}</p>
                    {
                        topics.map((t, i) => {
                            return(
                                <div className="item-class" key={i}>
                                    {t}
                                </div>
                            )
                        })
                    }
                </div>
            </Fade>
        </Modal>
    )
}

export default ModalProfile;
