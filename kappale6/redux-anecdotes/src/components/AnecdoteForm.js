import { useDispatch } from 'react-redux'
import { createAnec } from '../reducers/anecdoteReducer'
import anecService from '../services/anecs'


const AnecdoteForm = (props) => {
  const dispatch = useDispatch()

  const addAnec = async (event) => {
    event.preventDefault()
    const content = event.target.anec.value
    event.target.anec.value = ''
    const newNote = await anecService.createNew(content)
    dispatch(createAnec(newNote))
  }

  return (
    <form onSubmit={addAnec}>
      <input name="anec" />
      <button type="submit">add</button>
    </form>
  )
}

export default AnecdoteForm