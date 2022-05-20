
import { useState } from 'react'

import React from 'react'


const Button = ({handleClick, text}) => {
  return (
    <div>
      <button onClick={handleClick}>{text}</button>
    </div>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  function makeGood() {
    setGood(good + 1)
  }

  function makeNeutral() {
    setNeutral(neutral + 1)
  }

  function makeBad() {
    setBad(bad + 1)
  }
  return (
    <div>
      <Button 
      handleClick={makeGood}
      text="good"
      />
      <Button 
      handleClick={makeNeutral}
      text="neutral"
      />
      <Button 
      handleClick={makeBad}
      text="bad"
      />
      <p>{good}</p>
      <p>{neutral}</p>
      <p>{bad}</p>
    </div>
  )
}

export default App
