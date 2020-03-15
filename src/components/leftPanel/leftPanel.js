import React, { useContext } from 'react';
import DehazeIcon from '@material-ui/icons/Dehaze';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import { appContext } from '../../contextApi';
import './leftPanel.css';

const LeftPanel = ({left, users, removeUser, 
                    widthScreen, heightScreen, setOpenLeft, 
                    setOpenModal, showSubject}) => {

    const state = useContext(appContext);
    const { subjects } = state;
        
    return (
        <div className={`${widthScreen > 600 ? "panel-container-web" : "panel-container-mobile"} ${left ? "open" : ""}`}>
            <div className={`${widthScreen > 600 ? "panel-title-web" : "panel-title-mobile"}`}>
                <div>Materias</div>
                <div style={{marginRight:"15px"}}>
                    <Button variant="outlined" color="primary" onClick={setOpenLeft}>
                        <DehazeIcon />
                    </Button>
                </div>
                
                {/* <button style={{color:"white", marginRight:"15px", paddingTop:"10px"}}
                        onClick={() => setOpenLeft()}>
                    <IconButton aria-label="">
                        <DehazeIcon />
                    </IconButton>
                </button> */}
            </div>
            <hr/>
            {subjects.map((s, i) => <Subject key={i} subject={s} widthScreen={widthScreen} 
                                            setOpenLeft={setOpenLeft} setOpenModal={setOpenModal}
                                            showSubject={showSubject}/>)}
        </div>
    )
}

export default LeftPanel;

const Subject = ({subject, widthScreen, setOpenLeft, setOpenModal, showSubject}) => {

    const chooseSubject = subject => {
        showSubject(subject)
        setOpenLeft();
        setOpenModal();
    }

    return(
        <div className={`${widthScreen > 600 ? "panel-item-web" : "panel-item-mobile"}`}
             onClick={() => chooseSubject(subject)}
        >
            <div><subject.icon/></div>
            <div>{subject.title}</div>
            <div>{subject.time}</div>
        </div>
    )
}