import React from 'react'

const Persons = (props) => {
  return (
    <div>
        <h2>Phonebook</h2>
      {props.persons.map((person, i) => {
        return(
          <p key={i}>{person.name}</p>
        )
      })}
    </div>
  )
}

export default Persons