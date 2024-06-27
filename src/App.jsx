import React from "react";
import Header from "./components/Header/Header";
import VantaBackground from "./components/VantaBackground/VantaBackground";
import Routees from "./Routes/Routees";
const App = () => {
  return (
    <div className="relative">
      <VantaBackground />
      <div className="absolute top-0 left-0 z-10 w-full ">
        <Header />
      </div>
      <div className="absolute top-0 left-0 z-10 w-full ">
        <Routees />
      </div>
    </div>
  );
};

export default App;
