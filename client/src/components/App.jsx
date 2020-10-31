import React from 'react';
import Header from './Header.jsx';
import Search from './Search.jsx';
import MovieList from './MovieList.jsx';
import AddMovie from './AddMovie.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [],
      search: ''
    }

    this.searchInput = this.searchInput.bind(this);
    this.searchSubmit = this.searchSubmit.bind(this);
    this.updateMovies = this.updateMovies.bind(this);
  }

  componentDidMount() {
    axios.get('/movies')
    .then(this.updateMovies)
    .catch((error) => {console.log(error)})
  }

  updateMovies(response) {
    this.setState({
      movies: response.data
    })
  }

  searchInput(event) {
    event.preventDefault();
    this.setState({
      search: event.target.value
    })
  }

  searchSubmit(event) {
    event.preventDefault();
    let newData = [];
    let keyword = this.state.search;
    movieData.forEach(movie => {
      if (movie.title.toLowerCase().includes(keyword.toLowerCase())) {
        newData.push(movie);
      }
    });

    this.setState({
      movies: newData
    })
  }

  render() {
    return (
      <div>
        <Header />
        <AddMovie />
        <Search searchInput={this.searchInput} searchSubmit={this.searchSubmit}/>
        <MovieList movieData={this.state.movies}/>
      </div>
    )
  }
}

export default App;