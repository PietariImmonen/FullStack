import React from 'react'

const Persons = (props) => {
  return (
    <div>
        <h2>Phonebook</h2>
      { props.persons.map((person, i) => {
        return(
            <p key={person.name}>{person.name}: {person.number} <button onClick={ () => props.handleClick(person.id)} key={i}>Delete</button></p>
                
        )
      })}
    </div>
  )
}

export default Persons