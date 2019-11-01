import React from 'react';

export default (props) =>{
  return(
    <div>
      Greased only? :
      <input
        type='checkbox'
          checked={props.checked}
            onChange={props.handleToggle} />

      <select onChange={props.handleSort}>
        <option>Name</option>
        <option>Weight</option>
      </select>
    </div>
  )
}
