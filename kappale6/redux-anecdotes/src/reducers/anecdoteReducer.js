import { createSlice } from '@reduxjs/toolkit'
import anecService from '../services/anecs'




const getId = () => (100000 * Math.random()).toFixed(0)



const anecSlice = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers: {
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

  export const createNew = (content) => {
    return async dispatch => {
      const item = await anecService.createNew(content)
      dispatch(appendAnec(item))
    }
  }

  export const voteAnec2 = (anec) => {
    return async dispatch => {
      const updateAnec = {
        ...anec,
        votes: anec.votes + 1,
      }
      const updatedAnec = await anecService.voteAnec(updateAnec)
      const {id} = updatedAnec
      dispatch(voteAnec(id))
    }
  }

export default anecSlice.reducer