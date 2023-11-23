import React from "react";
import "./App.css";
import InputComponent from "./components/InputComponent";

function App() {
  return (
    <div className="min-h-screen flex-col items-center justify-center bg-gradient-to-b from-white to-green-700">
      <header className="text-center p-8 m-8 font-bold text-2xl">
        <h1>Website Carbon calculator</h1>
      </header>
      <div className="w-full">
        <InputComponent />
      </div>
    </div>
  );
}

export default App;
