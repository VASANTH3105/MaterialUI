import { useState } from "react";
import "./App.css";

import { Routes, Route, BrowserRouter} from 'react-router-dom';
import Main from "./components/main/Main";
import { Booking } from "./components/pages/Booking";
import Statuscheck from "./components/pages/Statuscheck";
import Settings from "./components/pages/Settings";
import Vehiclemaster from "./components/pages/Vehiclemaster";
import Drivermaster from "./components/pages/Drivermaster";
import Profile from "./components/pages/Profile";

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" exact element = {<Main />}></Route>
        <Route path="/booking" exact element= {<Booking />}></Route>
        <Route path="/ststuscheck" exact element= {<Statuscheck />}></Route>
        <Route path="/settings" exact element={<Settings />}></Route>
        <Route path="/vehiclemaster" exact element={<Vehiclemaster />}></Route>
        <Route path="/drivermaster" exact element={<Drivermaster />}></Route>
        <Route path="/profile" exact element={<Profile />}></Route>
      </Routes>
      </BrowserRouter>
      
    </>
  );
}

export default App;
