import React from 'react'
import NavBar from './NavBar'
import MainContainer from './MainContainer'

function App() {
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td>
              <NavBar />
            </td>
          </tr>
          <tr>
            <td>
              <MainContainer />
            </td>
          </tr>
        </tbody>
      </table>
      <style jsx>
        {`
      div {
        background-color: #e9f4e8;
      `}
      </style>
    </div>
  )
}

export default App
