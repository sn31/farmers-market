import React from 'react'
import NavBar from './NavBar'
import MainContainer from './MainContainer'

function App() {
  return (
    <div>
      <style global jsx>{`
      body {
        background-image: url("http://www.freeportnewsnetwork.com/wp-content/uploads/2016/07/Farmers-Market-1.jpg");
        background-attachment: fixed;
        background-repeat: no-repeat;
        background-size: cover;
    }`}
      </style>
      <div style={{backgroundColor:'#a4d6bf', height:'5em'}}>
        <NavBar/>
      </div>
      <MainContainer />
    </div>
  )
}

export default App
