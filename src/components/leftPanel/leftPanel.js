import React from 'react';
// import DehazeIcon from '@material-ui/icons/Dehaze';
// import Button from '@material-ui/core/Button';
import './leftPanel.css';

const LeftPanel = ({left, widthScreen, heightScreen, subjects,
                    setOpenLeft, setOpenDetails, showSubject}) => {
        
    return (
        <div className={`${widthScreen > 600 ? "panel-container-web" : "panel-container-mobile"} ${left ? "open" : ""}`}>
            <div className={`${widthScreen > 600 ? "panel-title-web" : "panel-title-mobile"}`}>
                <div>Materias</div>
            </div>
            <hr/>
            {subjects.map((s, i) => <Subject key={i} subject={s} widthScreen={widthScreen} 
                                            setOpenLeft={setOpenLeft} setOpenDetails={setOpenDetails}
                                            showSubject={showSubject}/>)}
        </div>
    )
}

export default LeftPanel;

const Subject = ({subject, widthScreen, setOpenLeft, setOpenDetails, showSubject}) => {

    const chooseSubject = subject => {
        showSubject(subject)
        setOpenLeft();
        setOpenDetails();
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