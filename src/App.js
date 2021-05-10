import React, { Component } from 'react';
import './App.css';
import NominationsComponent from './component/nominationComponent';
import SearchComponent from './component/searchComponent';
import ls from 'local-storage';
import 'bootstrap/dist/css/bootstrap.min.css';
import Heading from "./heading";

//import './component/Row.css'


//import NavBar from './component/navbar';



class App extends Component {

  state = {
    nominatedMovies: [],
    displayWarning: false
  };

  componentDidMount() {
    let temp = ls.get('nominated');
    this.setState({ nominatedMovies: temp });
    temp.length === 5 ? this.setState({ displayWarning: true }) : this.setState({ displayWarning: false })
  }

  handleDelete = (movieID) => {
    const nominatedMovies = this.state.nominatedMovies.filter(c => c.imdbID !== movieID);
    this.setState({ nominatedMovies });
    ls.set('nominated', nominatedMovies);
    nominatedMovies.length === 5 ? this.setState({ displayWarning: true }) : this.setState({ displayWarning: false })

  };

  handleNomination = (movie) => {
    //add movie to nomination  list
    let temp = [...this.state.nominatedMovies, movie];
    this.setState({ nominatedMovies: temp });
    ls.set('nominated', temp);
    temp.length === 5 ? this.setState({ displayWarning: true }) : this.setState({ displayWarning: false })

  };

  handleReset = () => {
    this.setState({ nominatedMovies: [] });
    ls.set("nominated", []);
    this.setState({ displayWarning: false })
  }

  populateNominations() {
    let temp = ls.get('nominated');
    this.setState({ nominatedMovies: temp });
  }

  render() {

    return (
      <React.Fragment>
        <div className="container-fluid movie-app">
          <SearchComponent
            movies={this.state.nominatedMovies}
            onNominate={this.handleNomination}
          />
          <div className="row d-flex align-items-center mt-4 mb-4">
            <Heading heading="Nominations" />
          </div>
          <button className="button"
            onClick={this.handleReset}
          >Reset Nominations</button>
          {this.state.displayWarning ? <h3>You can only nominate 5 movies! Reset or delete some movies to nominate</h3> : ''}
          <NominationsComponent
            movies={this.state.nominatedMovies}
            onDelete={this.handleDelete}
            nominated={false}
          />
        </div>
      </React.Fragment>


    );
  }
}

export default App;
