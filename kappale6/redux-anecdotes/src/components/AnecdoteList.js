import { useDispatch, useSelector } from 'react-redux'
import { voteAnec } from '../reducers/anecdoteReducer'
import { removeNotification, setNotification } from '../reducers/notificationReducer'

const Anec = ({ anec }) => {
    const dispatch = useDispatch()
    const combined = () => {
        dispatch(voteAnec(anec.id))
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
  const copyAnecs = [...anecs]
  const sorted = copyAnecs.sort((a,b) => (b.votes - a.votes))
  return(
    <ul>
      {sorted.map(anec =>
        <Anec
          key={anec.id}
          anec={anec}
        />
      )}
    </ul>
  )
}

export default Anecs