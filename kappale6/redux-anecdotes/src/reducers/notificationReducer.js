import { createSlice } from '@reduxjs/toolkit'

const initialState = [
    {
        message: "hello"
    }
]


const notificationReducer = createSlice({
    name: 'notification',
    initialState,
    reducers: {
      setNotification(state, action) {
        state.concat(action.message)
      },
      
    },
})

export default notificationReducer.reducer