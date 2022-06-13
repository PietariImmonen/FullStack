import { useDispatch, useSelector } from 'react-redux'
import { voteAnec2 } from '../reducers/anecdoteReducer'
import { setNoti } from '../reducers/notificationReducer'

const Anec = ({ anec }) => {
    const dispatch = useDispatch()
    const combined = () => {
        dispatch(voteAnec2(anec))
        dispatch(setNoti((`You voted ${anec.content}`), 3))
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