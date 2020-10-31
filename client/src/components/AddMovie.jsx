import React from 'react';

const AddMovie = (props) => (
  <div>

    <form
    className='addForm'>

      <input
      placeholder='Add To List'
      className='addInput'>
      </input>

      <button
      className='addSubmit'
      >Add</button>

    </form>
  </div>
)

export default AddMovie;