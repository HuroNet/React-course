import { useState, useEffect,useRef } from "react";

import Navbar from "./components/Navbar";

import Events from "./components/Events";
import "./App.css";
import SignupForm from "./components/SignupForm";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const containerRef = useRef()

  const handleNavbarSearch = (term) => {
    console.log(containerRef.current)
    setSearchTerm(term);
  };

  return (
    <>
      <Navbar onSearch={handleNavbarSearch}  ref={containerRef}/>
      <Events searchTerm={searchTerm} />
      {/* <SignupForm/> */}
    </>
  );
}

export default App;
