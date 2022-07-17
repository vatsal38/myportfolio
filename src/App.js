import React, { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Header/Navbar";
import Loading from "./components/Loading/Loading";
function App() {
  const [load, setLoad] = useState(false);
  useEffect(() => {
    setLoad(true);
    setTimeout(() => {
      setLoad(false);
    }, 1000);
  }, []);
  return <>{load ? <Loading /> : <Navbar />}</>;
}

export default App;
