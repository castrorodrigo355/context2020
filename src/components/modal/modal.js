import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import "./modal.css"

const useStyles = makeStyles(theme => ({
        modal: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        paper: {
            backgroundColor: theme.palette.background.paper,
            border: '1px solid #000',
            // boxShadow: theme.shadows[5],
            padding: theme.spacing(2, 4, 3),
            height: "350px"
        },
    }));

const ModalService = ({open, handleClose, selectedCourse}) => {

    const classes = useStyles();

    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={classes.modal}
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{timeout: 500}}
        >
            <Fade in={open}>
                <div className={classes.paper}>
                    {selectedCourse && <h2 id="transition-modal-title">{`Materia: ${selectedCourse.name}`}</h2>}
                    {selectedCourse && <p id="transition-modal-description">{`Tiempo Estimado: ${selectedCourse.hours} Horas`}</p>}
                    {
                        selectedCourse && 
                        selectedCourse.classes.map((c, i) => {
                            return(
                                <div className="item-class" key={i}>
                                    {c.topic}
                                </div>
                            )
                        })
                    }
                </div>
            </Fade>
        </Modal>
    )
}

export default ModalService;