import { createSlice } from '@reduxjs/toolkit'
import anecService from '../services/anecs'




const getId = () => (100000 * Math.random()).toFixed(0)



const anecSlice = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers: {
    createAnec(state, action) {
      const newAnec = action.payload
      state.push(newAnec)
    },
    voteAnec(state, action) {
      const id = action.payload
      const anecToVote = state.find(n => n.id === id)
      const votedAnec = {
        ...anecToVote,
        votes: anecToVote.votes + 1,
      }
      return state.map(anec =>
        anec.id === id ? votedAnec : anec)    
    },
    appendAnec(state, action) {
      state.push(action.payload)
    },
    setAnec(state, action) {
      return action.payload
    }
  },
})



export const { createAnec, voteAnec, appendAnec, setAnec } = anecSlice.actions

  export const initializeAnecs = () => {
    return async dispatch => {
      const anecs = await anecService.getAll()
      dispatch(setAnec(anecs))
    }
  }

export default anecSlice.reducer