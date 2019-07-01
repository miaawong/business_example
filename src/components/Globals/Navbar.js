import React, { Component } from "react"
import { Link } from "gatsby"
import svgLogo from "../../images/icon128.png"

export default class Navbar extends Component {
  state = {
    navbarOpen: false,
    // bootstrap classes, must match with bootstrap
    css: "collapse navbar-collapse navLinks",
    links: [
      {
        id: 1,
        path: "/",
        text: "home",
      },
      {
        id: 2,
        path: "/about",
        text: "about",
      },
      {
        id: 3,
        path: "/work",
        text: "Our Work",
      },
      {
        id: 4,
        path: "/contact",
        text: "Contact",
      },
    ],
  }
  navbarHandler = () => {
    this.state.navbarOpen
      ? this.setState({
          navbarOpen: false,
          css: "collapse navbar-collapse navLinks",
        })
      : this.setState({
          navbarOpen: true,
          css: "collapse navbar-collapse show",
        })
  }
  render() {
    return (
      <nav className="navbar navbar-expand-sm bg-light navbar-light font-weight-bold">
        <Link to="/" className="navbar-brand">
          <img src={svgLogo} alt="logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={this.navbarHandler}
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className={this.state.css}>
          <ul className="navbar-nav">
            {this.state.links.map(link => {
              return (
                <li key={link.id} className="nav-item mx-4">
                  <Link to={link.path} className="nav-link text-capitalize">
                    {link.text}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </nav>
    )
  }
}
