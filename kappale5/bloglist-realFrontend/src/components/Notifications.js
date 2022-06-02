import React from 'react'
import './notifications.css'

const Notifications = ({ msg }) => {
  if(msg === null) {
    return null
  }
  return (
    <div className='msg'>
      {msg}
    </div>
  )
}

export default Notifications