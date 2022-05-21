import React from 'react'

const Persons = (props) => {
  return (
    <div>
        <h2>Phonebook</h2>
      {props.persons.map((person, i, j) => {
        return(
                <p key={person.name}>{person.name}: {person.number}</p>
        )
      })}
    </div>
  )
}

export default Persons