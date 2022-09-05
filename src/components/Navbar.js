import React from 'react'

//for routing link
import {Link} from 'react-router-dom';

export default function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-md bg-dark navbar-dark">
    <Link className="navbar-brand" to="/">CRUD-Study</Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="collapsibleNavbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link" to="/">{props.heading}</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/addemp">Add Employee</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/emplist">Employee list</Link>
        </li>    
      </ul>
    </div>  
  </nav>
  )
}
