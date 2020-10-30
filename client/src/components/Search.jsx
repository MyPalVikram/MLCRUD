import React from 'react';

const Search = (props) => (
  <div>
    <form
    className='searchForm'
    onSubmit={props.searchSubmit}>

      <input
      placeholder='Search'
      className='searchBar'
      onChange={props.searchInput}
      ></input>

      <button
      className='searchSubmit'
      >Submit</button>

    </form>
  </div>
)

export default Search;