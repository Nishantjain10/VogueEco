import Login from "./screens/Form";
import Landing from "./screens/Landing";
import Signup from "./screens/Signup";
import Profile from "./screens/Profile";
import Profile2 from "./screens/Profile2";
import Success from "./screens/Success";
import Success2 from "./screens/Success2";
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
          <Route path="/profile" element={<Profile />} />
          <Route path="/success" element={<Success />} />
          <Route path="/profile2" element={<Profile2 />} />
          <Route path="/success2" element={<Success2 />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
