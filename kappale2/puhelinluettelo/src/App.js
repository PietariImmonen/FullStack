import { useEffect, useState } from 'react'
import Form from './components/Form'
import Notifications from './components/Notifications'
import Persons from './components/Persons'
import phoneService from './services/phoneService'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newSearch, setNewSearch] = useState('')
  const [message, setMessage] = useState('')

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
      window.alert(`You wanted to change ${newName} number?`)
      const human = persons.find(n => n.name === newName)
      const humanId = human.id;
      const changedNote = { ...human, number: newNumber}

      phoneService
        .update(humanId, changedNote)
        .then(returnedPerson => {
          setPersons(persons.map(person => person.id !== humanId ? person : returnedPerson))
        })
        .catch(error => {
          setMessage(`Error changing number${error}`)
          setPersons(persons.filter(p => p.id !== humanId))
        })
        setMessage(`Added ${human.name} new phone number`)
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
      setMessage(`Added ${personObject.name} to phone book`)
  }

  const deletePerson = (id) => {
    if((window.confirm("delete really"))) {
      phoneService
    .del(id)
      .then(
      setPersons(persons.filter(p => p.id !== id)))
    }
    setMessage(`Deleted person`)
  }

  return (
    <div>
      <Notifications msg = {message}/>
      <Persons 
        persons = {personsToShow}
        handleClick = {deletePerson}
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