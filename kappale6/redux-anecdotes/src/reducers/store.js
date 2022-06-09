import { configureStore } from '@reduxjs/toolkit'
import anecReducer from './anecdoteReducer'
import notificationReducer from './notificationReducer'


export const store = configureStore({
    reducer: {
      anecs: anecReducer,
      notification: notificationReducer
    }
})