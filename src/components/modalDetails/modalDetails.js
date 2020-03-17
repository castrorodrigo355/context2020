import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import "./modalDetails.css"

const ModalService = ({openModalDetails, handleClose, selectedCourse}) => {

    return (
            <Dialog open={openModalDetails}
                    onClose={handleClose}>
                <DialogTitle id="alert-dialog-title">
                    {
                        selectedCourse && 
                        <h2 id="transition-modal-title">
                            {`Materia: ${selectedCourse.name}`}
                            <p>{`Tiempo Estimado: ${selectedCourse.hours} Horas`}</p>
                        </h2>
                    }
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
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
                    </DialogContentText>
                </DialogContent>
            </Dialog>
    )
}

export default ModalService;

// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Modal from '@material-ui/core/Modal';
// import Backdrop from '@material-ui/core/Backdrop';
// import Fade from '@material-ui/core/Fade';
// import "./modalDetails.css"

// const useStyles = makeStyles(theme => ({
//         modal: {
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'center',
//         },
//         paper: {
//             backgroundColor: theme.palette.background.paper,
//             // border: '1px solid #000',
//             borderRadius: '60px',
//             padding: theme.spacing(2, 4, 3),
//             height: "400px"
//         },
//     }));

// const ModalService = ({openModalDetails, handleClose, selectedCourse}) => {

//     const classes = useStyles();

//     return (
//         <Modal
//             aria-labelledby="transition-modal-title"
//             aria-describedby="transition-modal-description"
//             className={classes.modal}
//             open={openModalDetails}
//             onClose={handleClose}
//             closeAfterTransition
//             disableEnforceFocus
//             BackdropComponent={Backdrop}
//             BackdropProps={{timeout: 500}}
//         >
//             <Fade in={openModalDetails}>
//                 <div className={classes.paper}>
//                     {selectedCourse && <h2 id="transition-modal-title">{`Materia: ${selectedCourse.name}`}</h2>}
//                     {selectedCourse && <p id="transition-modal-description">{`Tiempo Estimado: ${selectedCourse.hours} Horas`}</p>}
//                     {
//                         selectedCourse && 
//                         selectedCourse.classes.map((c, i) => {
//                             return(
//                                 <div className="item-class" key={i}>
//                                     {c.topic}
//                                 </div>
//                             )
//                         })
//                     }
//                 </div>
//             </Fade>
//         </Modal>
//     )
// }

// export default ModalService;