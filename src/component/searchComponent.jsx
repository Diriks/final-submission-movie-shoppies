import React, { Component } from "react";
import MovieComponent from "./movieComponent";
import "bootstrap/dist/css/bootstrap.min.css";
import Heading from "./../heading";
import axios from "axios";
import SearchBar from "./searchbar";
import "./../App.css";
class SearchComponent extends Component {
  state = {
    searchResults: [],
    query: "",
  };

  //get the movies from the API
  sendQuery = async (query) => {
    let movies = await axios.get(
      `http://www.omdbapi.com/?i=tt3896198&apikey=7ef2162c&type=movie&s=${query}`
    );
    if (movies.data.Response === "False") {
      let movies = await axios.get(
        `http://www.omdbapi.com/?i=tt3896198&apikey=7ef2162c&type=movie&t=${query}`
      );
      if (movies.data.Response === "True")
        this.setState({ searchResults: [movies.data] });
    } else {
      let data = movies.data.Search;
      this.setState({ searchResults: data });
    }
  };

  handleQuery = (q) => {
    console.log(q.target.value);
    this.setState({ query: q.target.value });
    this.sendQuery(q.target.value);
  };

  render() {
    return (
      <div className="container-fluid movie-app">
        <div className="row d-flex align-items-center mt-4 mb-4">
          <Heading heading="Movies" />
          <SearchBar value={this.state.query} onQuery={this.handleQuery} />
        </div>
        <div className="row__posters">
          {this.state.searchResults ? (
            this.state.searchResults.map((movie) => (
              <MovieComponent
                key={this.state.searchResults.indexOf(movie)}
                movie={movie}
                delete={false}
                onNominate={this.props.onNominate}
                nominated={
                  this.props.movies.length > 4 ||
                  this.props.movies.find((c) => c.Title === movie.Title)
                    ? true
                    : false
                }
              />
            ))
          ) : (
            <p>No movie title to search for</p>
          )}
        </div>
      </div>
    );
  }
}

export default SearchComponent;
