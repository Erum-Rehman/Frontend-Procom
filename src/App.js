import React from 'react';
import Header from '../src/components/Header';
import {Route,Routes} from 'react-router-dom';
import Authentication from './pages/Authentication';
import Login from "./components/RegistrationLogin/Login";
import Register from "./components/RegistrationLogin/Register";
import Board from './pages/Board';
import BasicModal from './components/BasicModal';
import GridList from './pages/GridList';
import Label from './components/Label';

function App() {
  return (
    <>
    {/* <Header /> */}
    {/* <Authentication/> */}
      <Routes>
        <Route path="/login" element={<Authentication />}></Route>
        <Route path="/register" element={<Authentication />} />
        <Route path="/board" element={<Board />} />
        <Route path="/gridList" element={<GridList />} />
        <Route path="/label" element={<Label />} />
      </Routes>
    </>
  );
}

export default App;
