import React from 'react'
import NavBar from './NavBar'
import MainContainer from './MainContainer'
import Welcome from './Welcome';

function App() {
  return (
    <div>
      <style global jsx>{`
      body {
        background-image: url("http://www.freeportnewsnetwork.com/wp-content/uploads/2016/07/Farmers-Market-1.jpg");
        background-attachment: fixed;
        background-repeat: no-repeat;
        background-size: cover;
    }

    #welcome{
      font-size: 10em;
    }
    `}
      </style>
      <div style={{backgroundColor:'#a4d6bf', height:'5em'}}>
        <NavBar/>
      </div>
      <Welcome id="welcome"/>
      <MainContainer />
    </div>
  )
}

export default App
