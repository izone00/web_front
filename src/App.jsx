import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Room from './Component/room_Component/Room';
import Home from "./Component/home_Component/Home";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rooms" element={<Room />} />
      </Routes>
    </BrowserRouter>
  );
};



export default App;