import { Route, Routes } from "react-router-dom";
import Intro from "./pages/Auth/Intro/Intro";
import Register from "./pages/Auth/Register/Register";
import CreateUsername from "./pages/Auth/Register/CreateUsername";
import Login from "./pages/Auth/Login/Login";
import ForgotPassword from "./pages/Auth/ForgotPassword/ForgotPassword";



function App() {
  return (
    <>
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/register" element={<Register />} />
          <Route path="/register/create" element={<CreateUsername/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/login/reset" element={<ForgotPassword />} />
          
        </Routes>
    </>
  );
}

export default App;
