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

  // const[users, setUsers] = useState([]);
  // useEffect(() => {
  //   async function getUsers(){
  //       const res = await fetch('https://jsonplaceholder.typicode.com/users');
  //       const list = await res.json();
  //       const response = list.slice(0, 3);
  //       setUsers(response.map(r => {
  //         return {id: r.id, name: r.name, email: r.email, site: r.website}
  //       }));
  //   }
  //   getUsers();
  // }, []);

  // const[left, setLeft] = useState(true);
  // const[right, setRight] = useState(false);
  // const[openModal, setOpen] = useState(false);

  // const setOpenLeft = () => setLeft(!left);
  // const setOpenRight = () => setRight(!right);
  // const setOpenModal = () => setOpen(!openModal);

  // const onAddUser = user => {
  //   const { name, email, site } = user;
  //   const lengthUsers = users.length;
  //   const newUser = {id: lengthUsers, name, email, site};
  //   setUsers([...users, newUser]);
  // }

  // const removeUser = index => setUsers(users.filter((user, i) => i !== index));

  // const [dimensions, setDimensions] = React.useState({
  //   height: window.innerHeight,
  //   width: window.innerWidth
  // });

  // React.useEffect(() => {
  //   const debouncedHandleResize = function handleResize() {
  //     setDimensions({
  //       height: window.innerHeight,
  //       width: window.innerWidth
  //     });
  //   };

  //   window.addEventListener("resize", debouncedHandleResize);

  //   return () => {
  //     window.removeEventListener("resize", debouncedHandleResize);
  //   };
  // });

  // console.log(dimensions);

  // const[selectedSubject, setSelectedSubject] = useState("");

  // const showSubject = subject => setSelectedSubject(subject);

  return (
    <Provider value = {state}>
      {/* <div> */}
        <Home/>
        {/* <LeftPanel  left={left} users={users} removeUser={removeUser} setOpenLeft={setOpenLeft}
                    setOpenModal={setOpenModal} showSubject={showSubject}
                    widthScreen={dimensions.width} heightScreen={dimensions.height}/> */}
        {/* <MapLeaflet left={left} right={right}
                    setOpenLeft={setOpenLeft} 
                    setOpenRight={setOpenRight}
                    setOpenModal={setOpenModal} /> */}
        {/* <Modal open={openModal} handleClose={setOpenModal} selectedSubject={selectedSubject}/> */}
        {/* 
        <DrawerRight right={right} onAddUser={onAddUser} /> 
        */}
      {/* </div> */}
    </Provider>
  );
}

export default App;
