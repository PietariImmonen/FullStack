import { useEffect, useState } from 'react'
import Form from './components/Form'
import Persons from './components/Persons'
import axios from "axios"
import phoneService from './services/phoneService'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: "12313123123" }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newSearch, setNewSearch] = useState('')

  useEffect(() => {
    phoneService.getAll()
    .then(all => setPersons(all))
  },[])

  let personsToShow = persons
  if(newSearch) {
    personsToShow = persons.filter((person => person["name"].includes(newSearch)))
  }

  const handlePersonChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const handleSearchChange = (event) => {
    console.log(event.target.value)
    setNewSearch(event.target.value)
  }

  const addPerson = (event) => {
    event.preventDefault()
    if(persons.some(person => person["name"] === newName)) {
      window.alert(`${newName} is already added to phonebook`)
      return
    }
    const personObject = {
      name: newName,
      number: newNumber,
    }

    phoneService
      .create(personObject)
        .then(returnedPerson => {
          console.log(returnedPerson)
        setPersons(persons.concat(returnedPerson))
        setNewName('')
        setNewNumber('')
      })
  }

  return (
    <div>
      <Persons 
        persons = {personsToShow}
      />

      <Form 
        addPerson={addPerson}
        handlePersonChange={handlePersonChange}
        handleNumberChange={handleNumberChange}
        handleSearchChange={handleSearchChange}
        newName={newName}
        newNumber={newNumber}
        newSearch={newSearch}
      />
      <h2>Numbers</h2>
      ...
    </div>
  )

}

export default App