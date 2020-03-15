import React from 'react';
import { Provider } from "./contextApi";
import Home from './components/home/home';
// import MapLeaflet from "./components/map/map";
// import LeftPanel from "./components/leftPanel/leftPanel";
// import DrawerRight from "./components/drawerRight/drawerRight";
// import Modal from "./components/modal/modal";
import state from "./reducer";
// import './App.css';

const App = () => {

  return (
    <Provider value = {state}>
      <Home/>
      {/* <MapLeaflet left={left} right={right}
                  setOpenLeft={setOpenLeft} 
                  setOpenRight={setOpenRight}
                  setOpenModal={setOpenModal} /> */}
      {/* <Modal open={openModal} handleClose={setOpenModal} selectedSubject={selectedSubject}/> */}
      {/* 
      <DrawerRight right={right} onAddUser={onAddUser} /> 
      */}
    </Provider>
  );
}

export default App;
