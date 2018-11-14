import React from "react";
import NavBar from "./NavBar";
import MainContainer from "./MainContainer";

function App() {
  return (
    <div>
      <div style={{backgroundColor:'#a4d6bf', height:'5em'}}>
      <NavBar/>
      </div>
      <MainContainer />
    </div>
  );
}

export default App;
