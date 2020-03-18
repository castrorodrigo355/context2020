import React from 'react';
import { Provider } from "./contextApi";
import Home from './components/home/home';
import state from "./reducer";

const App = () => {

  return (
    <Provider value = {state}>
      <Home/>
    </Provider>
  );
}

export default App;
