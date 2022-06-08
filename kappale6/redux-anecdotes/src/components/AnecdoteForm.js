import { useDispatch } from 'react-redux'
import { add } from '../reducers/anecdoteReducer'

const AnecdoteForm = (props) => {
  const dispatch = useDispatch()

  const addAnec = (event) => {
    event.preventDefault()
    const content = event.target.anec.value
    event.target.anec.value = ''
    console.log(content)
    dispatch(add(content))
  }

  return (
    <form onSubmit={addAnec}>
      <input name="anec" />
      <button type="submit">add</button>
    </form>
  )
}

export default AnecdoteForm