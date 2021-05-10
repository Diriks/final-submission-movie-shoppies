import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

class MovieComponent extends Component {
  //controlled component for a movie object

  styles = {
    fontSize: 20,
    fontWeight: "bold",
  };

  render() {
    //console.log(this.props)
    return (
      <div className="image-container d-flex justify-content-start m-1">
        <p>{this.props.movie.Year} movie</p>
        <img
          src={this.props.movie.Poster}
          alt={this.props.movie.Title}
          //onClick={handleClick}
        ></img>
        {!this.props.nominated ? (
          <div
            onClick={() =>
              this.props.delete
                ? this.props.onDelete(this.props.movie.imdbID)
                : this.props.onNominate(this.props.movie)
            }
            className="overlay d-flex align-items-center justify-content-center"
          >
            {this.props.delete ? (
              <span className="mr-2" style={{ color: "red" }}>
                Remove from Nominations
              </span>
            ) : (
              <span className="mr-2" style={{ color: "green" }}>
                Add to Nominations
              </span>
            )}
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default MovieComponent;
