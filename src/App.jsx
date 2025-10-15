import { useState } from "react";
import "./App.css";
import MainArea from "./components/layout/MainArea.jsx";
import Header from "./components/layout/Header.jsx";
import Footer from "./components/layout/Footer.jsx";

function App() {
  return (
    <>
      <Header />
      <MainArea />
      <Footer />
    </>
  );
}

export default App;
