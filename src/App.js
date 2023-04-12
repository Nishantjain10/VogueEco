import Login from "./screens/Login";
import Landing from "./screens/Landing";
import Signup from "./screens/Signup";
import TreeForm from "./screens/TreeForm";
import ClothForm from "./screens/ClothForm";
import PlantSuccess from "./screens/PlantSuccess";
import ClothSuccess from "./screens/ClothSuccess";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile" element={<TreeForm />} />
          <Route path="/success" element={<PlantSuccess />} />
          <Route path="/profile2" element={<ClothForm />} />
          <Route path="/success2" element={<ClothSuccess />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
