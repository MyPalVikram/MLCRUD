import React from 'react';

const MovieEntries = (props) => (
  <div className='movieEntry'>
    <span>{props.movie.name}</span>
  </div>
)

export default MovieEntries;