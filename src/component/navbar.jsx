import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

class NavBar extends Component {
  state = {
    count: 0,
  };

  render() {
    return (
      <nav className={this.getNavClasses()}>
        <span className="navbar-brand mb-0 h1">No movies nominated</span>
      </nav>
    );
  }

  getNavClasses() {
    let classes = "navbar navbar-light bg-";
    classes += this.state.count === 5 ? "danger" : "light";
    return classes;
  }
}

export default NavBar;
