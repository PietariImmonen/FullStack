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

    export const setNot = (content, time) => {
        console.log('run')
        console.log(content)
        console.log(time)
        return async dispatch => {
            console.log("yes")
            dispatch(setNotification(content))
        }
    }

    export const setNoti = (content, time) => {
        return (dispatch) => {
          console.log('lol')
          const item = content
          dispatch(setNotification(item))
          setTimeout(() => {
              dispatch(removeNotification())
          }, time*1000)
        }
      }

export default notificationReducer.reducer