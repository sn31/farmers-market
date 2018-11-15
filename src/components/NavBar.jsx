import React from 'react'
import { Link } from 'react-router-dom';
function NavBar() {
  return (
    <ul>
      <style jsx>{`
        ul {
          list-style-type: none;
          padding-left: 0;
          font-size: 1.5em;
          color:#1e704b;
        },
        li {
          display: inline-block;
          float: left;
          margin-right: 1em;
        },
        `}</style>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/schedule">Schedule</Link></li>
      <li><Link to="/produce">Produce</Link></li>
    </ul>
  )
}

export default NavBar