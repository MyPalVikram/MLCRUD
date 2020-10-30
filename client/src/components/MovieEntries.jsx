import React from 'react';

const MovieEntries = (props) => (
  <div className='movieEntry'>
    <span>{props.movie.title}</span>
  </div>
)

export default MovieEntries;