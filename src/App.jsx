import { useState } from "react";
// import "./App.css";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  //   const [states, setStates] = useStates({
  // isMenuOpen: false,
  //   });

  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
