import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

class SearchBar extends Component {
  render() {
    return (
      <div className="col col-sm-4">
        <input
          className="form-control"
          value={this.props.value}
          placeholder="Search for movies"
          onChange={this.props.onQuery}
        />
      </div>
    );
  }
}

export default SearchBar;
