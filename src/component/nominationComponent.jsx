import React, { Component } from "react";
//import SearchComponent from './searchComponent';
import MovieComponent from "./movieComponent";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Row.css";
import "./../App.css";

class NominationComponent extends Component {
  render() {
    return (
      <div className="container-fluid movie-app">
        <div className="row__posters">
          {this.props.movies ? (
            this.props.movies.map((movie) => (
              <MovieComponent
                key={this.props.movies.indexOf(movie)}
                movie={movie}
                delete
                onDelete={this.props.onDelete}
              />
            ))
          ) : (
            <p>Nominate your favourite movies</p>
          )}
        </div>
      </div>
    );
  }
}

export default NominationComponent;
