import { configureStore } from '@reduxjs/toolkit'
import anecReducer from './reducers/anecdoteReducer'


export const store = configureStore({
    reducer: {
      anecs: anecReducer,
    }
})