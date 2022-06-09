import { createSlice } from '@reduxjs/toolkit'

const initialState = 
    {
        message: ""
    }



const notificationReducer = createSlice({
    name: 'notification',
    initialState,
    reducers: {
      setNotification(state, action) {
        const content = action.payload
        state.message = content
      },
      removeNotification(state, action) {
        state.message = ''
      }
    },
})
export const { setNotification, removeNotification } = notificationReducer.actions
export default notificationReducer.reducer