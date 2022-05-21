import { useState } from 'react'
import Form from './components/Form'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')


  const handlePersonChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const addPerson = (event) => {
    event.preventDefault()
    if(persons.some(person => person["name"] === newName)) {
      window.alert(`${newName} is already added to phonebook`)
      return
    }
    const personObject = {
      name: newName
    }

    setPersons(persons.concat(personObject))
    setNewName('')
  }

  return (
    <div>
      <Persons 
        persons = {persons}
      />

      <Form 
        addPerson={addPerson}
        handlePersonChange={handlePersonChange}
        newName={newName}
      />
      <h2>Numbers</h2>
      ...
    </div>
  )

}

export default App