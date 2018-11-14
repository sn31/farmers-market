import React from 'react'

function NavBar() {
  return (
    <ul>
      <style jsx>{`
        ul {
          list-style-type: none;
        },
        li {
          display: inline-block;
          float: left;
          margin-right: 1em;
        }
        `}</style>
      <li>About Us</li>
      <li>Schedule</li>
      <li>Produce</li>
      <li>Contact</li>
    </ul>
  )
}

export default NavBar