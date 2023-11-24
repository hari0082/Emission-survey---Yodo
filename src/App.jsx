import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import InputComponent from "./components/InputComponent";
import Layout from "./components/Layout";

function App() {
  return (
    <Router>
      <div className="flex-col items-center justify-center min-h-screen body">
        <Layout />
        <InputComponent />
      </div>
    </Router>
  );
}

export default App;
