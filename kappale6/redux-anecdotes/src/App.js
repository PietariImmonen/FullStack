import { useEffect } from 'react'
import AnecdoteForm from './components/AnecdoteForm'
import Anecs from './components/AnecdoteList'
import Notification from './components/Notification'
import anecService from './services/anecs'
import { setAnec } from './reducers/anecdoteReducer'
import { useDispatch } from 'react-redux'

const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    anecService
      .getAll().then(notes => dispatch(setAnec(notes)))
  }, [dispatch])


  return (
    <div>
      <Notification />
      <Anecs />
      <AnecdoteForm />
    </div>
  )
}

export default App