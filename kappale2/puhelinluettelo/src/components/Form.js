import React from 'react'

const Form = (props) => {
  return (
    <div>
      <form onSubmit={props.addPerson}>
        <div>
            name: <input 
            value={props.newName}
            onChange={props.handlePersonChange}
          />
        </div>
        <div>
            number: <input 
            value={props.newNumber}
            onChange={props.handleNumberChange}/>
        </div>
        
        <div>
            Filter: <input 
            value={props.newSearch}
            onChange={props.handleSearchChange}/>
            </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </div>
  )
}

export default Form