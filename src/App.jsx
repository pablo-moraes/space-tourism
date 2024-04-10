import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/Home";
import Navbar from "./components/Navbar";

import "./App.css";
import "./assets/css/variables.css";
import Technology from "./pages/Technology";
import Crew from "./pages/Crew";
import Destination from "./pages/Destination";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="home" element={<Home />} />
          <Route path="/" element={<Navigate replace to="home" />} />

          <Route path="crew" element={<Crew/>}/>
          <Route path="technology" element={<Technology/>}/>
          <Route path="destination" element={<Destination/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
