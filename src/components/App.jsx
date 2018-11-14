import React from "react";
import NavBar from "./NavBar";
import MainContainer from "./MainContainer";

function App() {
  return (
    <div>
      <table>
        <tr>
          <NavBar />
        </tr>
        <tr>
          <MainContainer />
        </tr>
      </table>
      <style jsx>
        {`
      div {
        background-color: #e9f4e8;
      `}
      </style>
    </div>
  );
}

export default App;
