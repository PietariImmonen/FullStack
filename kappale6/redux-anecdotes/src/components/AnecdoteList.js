import { useDispatch, useSelector } from 'react-redux'
import { vote } from '../reducers/anecdoteReducer'
import { removeNotification, setNotification } from '../reducers/notificationReducer'

const Anec = ({ anec }) => {
    const dispatch = useDispatch()
    const combined = () => {
        dispatch(vote(anec.id))
        dispatch(setNotification(`You voted ${anec.content}`))
        setTimeout(() => {
            dispatch(removeNotification())
        }, 5000)
    }
  return(
    <li>
      {anec.content} 
      <div>
            has {anec.votes}
            <button onClick={combined}>vote</button>
          </div>
    </li>
  )
}

const Anecs = () => {
  const anecs = useSelector(state => state.anecs)
  const anecsSorted = anecs.sort((a,b) => b.votes - a.votes)
  return(
    <ul>
      {anecsSorted.map(anec =>
        <Anec
          key={anec.id}
          anec={anec}
        />
      )}
    </ul>
  )
}

export default Anecs