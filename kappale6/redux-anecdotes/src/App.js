import AnecdoteForm from './components/AnecdoteForm'
import Anecs from './components/AnecdoteList'
import Notification from './components/Notification'

const App = () => {
  return (
    <div>
      <Notification />
      <Anecs />
      <AnecdoteForm />
    </div>
  )
}

export default App