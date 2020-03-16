import React, { useState, useEffect, useContext } from 'react';
import LeftPanel from "../leftPanel/leftPanel";
import DrawerRight from "../drawerRight/drawerRight";
import Modal from "../modal/modal";
import SocialNetsButton from '../socialNetsButton/socialNetsButton';
import FloatingButton from '../floatingButton/floatingButton';
import LeftPanelButton from '../leftPanelButton/leftPanelButton';
import MapLeaflet from '../map/map';
import { appContext } from '../../contextApi';
import '../../App.css';

const Home = () => {

    const state = useContext(appContext);
    const { subjects, courses } = state;

    const[left, setLeft] = useState(false);
    const[right, setRight] = useState(false);
    const[openModal, setOpen] = useState(false);

    const setOpenLeft = () => setLeft(c => !c);
    const setOpenRight = () => setRight(!right);
    const setOpenModal = () => setOpen(!openModal);

    const [dimensions, setDimensions] = React.useState({
        height: window.innerHeight,
        width: window.innerWidth
    });

    React.useEffect(() => {
        const debouncedHandleResize = function handleResize() {
        setDimensions({
            height: window.innerHeight,
            width: window.innerWidth
        });
        };

        window.addEventListener("resize", debouncedHandleResize);

        return () => {
        window.removeEventListener("resize", debouncedHandleResize);
        };
    });

    const[selectedCourse, setSelectedCourse] = useState(null);

    const showSubject = subject => {
        const myCourse = courses.find(c => c.id === subject.id);
        if(!myCourse){
            setSelectedCourse(null);    
        }else{
            setSelectedCourse(myCourse);
        }
    }

    return (
        <div className="App">
            <LeftPanelButton left={left} setOpenLeft={setOpenLeft}/>
            <LeftPanel  left={left} subjects={subjects} setOpenLeft={setOpenLeft}
                        setOpenModal={setOpenModal} showSubject={showSubject}
                        widthScreen={dimensions.width} heightScreen={dimensions.height}/>
            <MapLeaflet/>
            <Modal open={openModal} handleClose={setOpenModal} selectedCourse={selectedCourse}/>
            <SocialNetsButton />
            <FloatingButton setOpenModal={setOpenModal}/>
        </div>
    )
}

export default Home;
