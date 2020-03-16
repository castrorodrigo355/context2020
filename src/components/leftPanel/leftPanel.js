import React from 'react';
import DehazeIcon from '@material-ui/icons/Dehaze';
import Button from '@material-ui/core/Button';
import './leftPanel.css';

const LeftPanel = ({left, widthScreen, heightScreen, subjects,
                    setOpenLeft, setOpenModal, showSubject}) => {
        
    return (
        <div className={`${widthScreen > 600 ? "panel-container-web" : "panel-container-mobile"} ${left ? "open" : ""}`}>
            <div className={`${widthScreen > 600 ? "panel-title-web" : "panel-title-mobile"}`}>
                <div>Materias</div>
                <div style={{marginRight:"15px"}}>
                    <Button variant="outlined" color="primary" onClick={setOpenLeft}>
                        <DehazeIcon />
                    </Button>
                </div>
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