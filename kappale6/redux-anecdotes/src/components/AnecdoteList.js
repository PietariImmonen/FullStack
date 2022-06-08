import { useDispatch, useSelector } from 'react-redux'
import { vote } from '../reducers/anecdoteReducer'

const Anec = ({ anec, handleClick }) => {
  return(
    <li>
      {anec.content} 
      <div>
            has {anec.votes}
            <button onClick={handleClick}>vote</button>
          </div>
    </li>
  )
}

const Anecs = () => {
  const dispatch = useDispatch()
  const anecs = useSelector(state => state)
  const anecsSorted = anecs.sort((a,b) => b.votes - a.votes)

  return(
    <ul>
      {anecsSorted.map(anec =>
        <Anec
          key={anec.id}
          anec={anec}
          handleClick={() => dispatch(vote(anec.id))
          }
        />
      )}
    </ul>
  )
}

export default Anecs