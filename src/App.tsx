import { useState } from "react";

import "./App.css";
import { Route, Routes } from "react-router-dom";
import Register from "./pages/Auth/Register/Register";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Register />} />
        {/* <Route path="/login" element={<LogIn />} /> */}
      </Routes>
    </>
  );
}

export default App;
