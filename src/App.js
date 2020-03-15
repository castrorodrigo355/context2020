import React from 'react';
import { Provider } from "./contextApi";
import Home from './components/home/home';
import state from "./reducer";
// import MapLeaflet from "./components/map/map";
// import DrawerRight from "./components/drawerRight/drawerRight";

const App = () => {

  return (
    <Provider value = {state}>
      <Home/>
      {/* <MapLeaflet left={left} right={right}
                  setOpenLeft={setOpenLeft} 
                  setOpenRight={setOpenRight}
                  setOpenModal={setOpenModal} /> */}
      {/* 
      <DrawerRight right={right} onAddUser={onAddUser} /> 
      */}
    </Provider>
  );
}

export default App;
