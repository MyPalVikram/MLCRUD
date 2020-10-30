import React from 'react';
import MovieEntries from './MovieEntries.jsx';

const MovieList = (props) => (
  <div>
    <h4 className='listTitle'>Current List</h4>
    {props.movieData.map((movie, index) =>
    <MovieEntries
    key = {index}
    movie = {movie}
    />
    )}
  </div>
)

export default MovieList;