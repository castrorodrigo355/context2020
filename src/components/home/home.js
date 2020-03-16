import React, { useState, useEffect } from 'react';
import LeftPanel from "../leftPanel/leftPanel";
import DrawerRight from "../drawerRight/drawerRight";
import Modal from "../modal/modal";
import SocialNetsButton from '../socialNetsButton/socialNetsButton';
import '../../App.css';
import FloatingButton from '../floatingButton/floatingButton';
import LeftPanelButton from '../leftPanelButton/leftPanelButton';
import MapLeaflet from '../map/map';

const Home = () => {

    const[users, setUsers] = useState([]);
    useEffect(() => {
        async function getUsers(){
            const res = await fetch('https://jsonplaceholder.typicode.com/users');
            const list = await res.json();
            const response = list.slice(0, 3);
            setUsers(response.map(r => {
            return {id: r.id, name: r.name, email: r.email, site: r.website}
            }));
        }
        getUsers();
    }, []);

    const[left, setLeft] = useState(false);
    const[right, setRight] = useState(false);
    const[openModal, setOpen] = useState(false);

    const setOpenLeft = () => setLeft(c => !c);
    const setOpenRight = () => setRight(!right);
    const setOpenModal = () => setOpen(!openModal);

    const onAddUser = user => {
        const { name, email, site } = user;
        const lengthUsers = users.length;
        const newUser = {id: lengthUsers, name, email, site};
        setUsers([...users, newUser]);
    }

    const removeUser = index => setUsers(users.filter((user, i) => i !== index));

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

    console.log(dimensions);

    const[selectedSubject, setSelectedSubject] = useState("Rodri Clases");

    const showSubject = subject => setSelectedSubject(subject.name);

    return (
        <div className="App">
            <LeftPanelButton left={left} setOpenLeft={setOpenLeft}/>
            {/* <DrawerRight/> */}
            <LeftPanel  left={left} users={users} 
                        removeUser={removeUser} setOpenLeft={setOpenLeft}
                        setOpenModal={setOpenModal} showSubject={showSubject}
                        widthScreen={dimensions.width} heightScreen={dimensions.height}/>
            <MapLeaflet/>
            <Modal open={openModal} handleClose={setOpenModal} selectedSubject={selectedSubject}/>
            <SocialNetsButton />
            <FloatingButton setOpenModal={setOpenModal}/>
        </div>
    )
}

export default Home;
