// import React from "react"
import PropTypes from "prop-types"
import { BrowserRouter, Link } from "react-router-dom";
// import App from "../App"
function Navbar(props) {
  let bt = {
    textDecoration:'none',
    color:'red'
  }
  let co = {
    backgroundColor:"aliceblue"
  }
  let but = {
    backgroundColor:"aqua"
  }
  return (
    <>

<nav className={`"navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} "`} style={co}>
  <div className="container-fluid">
    <a className="navbar-brand" href="/">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon " style={but}></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <BrowserRouter>
              <Link to="/" style={bt}>
                <li className="nav-item mx-2 " style={bt}>Home</li>
              </Link>
              <Link to="/about" style={bt}>
                <li className="nav-item mx-2" style={bt}>About</li>
              </Link>
              </BrowserRouter>
        {/* <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            
          </ul>
        </li> */}
        {/* <li className="nav-item">
          <a className="nav-link disabled" href="/" tabindex="-1" aria-disabled="true">Disabled</a>
        </li> */}
      </ul>
      {/* <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
      <div className={`form-check form-switch `}>
              <input className="form-check-input " onClick={props.toggle} type="checkbox" id="flexSwitchCheckDefault" />
              <label className={`form-check-label text-${props.mode === "dark" ? "light" : "dark"} mx-2 `} htmlFor="flexSwitchCheckDefault">EnableDarkMode</label>

            </div>
            <div className="form-check form-switch " >
              <input className="form-check-input  " onClick={props.trigger} type="checkbox" id="flexSwitchCheckDefault" />
              <label className={`form-check-label text-${props.mode === "dark" ? "light" : "dark"} mx-2`} htmlFor="flexSwitchCheckDefault">EnableRedMode</label>
    </div>
    </div>
            
  </div>
</nav>
    </>
  )
};

//Default Props  
Navbar.defaultProps = {
  title: "Set the Title",
  about: "Set the About"
};

//Props Types
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  about: PropTypes.string
};

export default Navbar
