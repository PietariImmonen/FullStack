import { useDispatch, useSelector } from 'react-redux'
import { voteAnec2 } from '../reducers/anecdoteReducer'
import { removeNotification, setNotification } from '../reducers/notificationReducer'

const Anec = ({ anec }) => {
    const dispatch = useDispatch()
    const combined = () => {
        dispatch(voteAnec2(anec))
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
  const copy = [...anecs]
  const sorted = copy.sort((a,b) => b.votes - a.votes)
  console.log(anecs)
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