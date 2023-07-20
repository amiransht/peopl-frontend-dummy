import { Navigate, Route, Routes } from "react-router-dom";
import Intro from "./pages/Auth/Intro/Intro";
import Register from "./pages/Auth/Register/Register";
import Home from "./pages/Home/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/register" element={<Register />} />
        {/* <Route path="/login" element={<LogIn />} /> */}
        <Route path="/home" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
