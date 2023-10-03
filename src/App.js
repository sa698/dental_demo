import React from "react";
import { BrowserRouter, Routes,Route } from "react-router-dom";
import Usage from "./Pages/Usage";
import Home from "./Pages/Home";
 
// import ResponsiveAppBar from "./AppBar";
import Dental from "./Pages/Dental";
import AppBar from "./AppBar";

function App() {
  return (
    <BrowserRouter>
      <div>
        {/* <ResponsiveAppBar 
        /> */}
        <AppBar/>
      </div>
      <Routes>
        <Route path="/" element={<Dental />} />
        <Route path="/usage" element={<Usage />} />
        <Route path="/dental" element={<Dental />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
