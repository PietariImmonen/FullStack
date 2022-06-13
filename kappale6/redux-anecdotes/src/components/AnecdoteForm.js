import { useDispatch } from 'react-redux'
import { createNew } from '../reducers/anecdoteReducer'


const AnecdoteForm = (props) => {
  const dispatch = useDispatch()

  const addAnec = async (event) => {
    event.preventDefault()
    const content = event.target.anec.value
    event.target.anec.value = ''
    dispatch(createNew(content))
  }

  return (
    <form onSubmit={addAnec}>
      <input name="anec" />
      <button type="submit">add</button>
    </form>
  )
}

export default AnecdoteForm