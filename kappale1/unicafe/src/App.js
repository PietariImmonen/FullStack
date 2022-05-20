
import { useState } from 'react'

import React from 'react'


const Button = ({handleClick, text}) => {
  return (
    <div>
      <button onClick={handleClick}>{text}</button>
    </div>
  )
}

const StatisticsLine = ({show}) => {
  return(
    <div>
      <p>{show}</p>
    </div>
  )
}

const Statistics = (props) => {

  if(props.good === 0 && props.neutral === 0 && props.bad === 0) {
    return(
      <div>
       <Button 
      handleClick={props.makeGood}
      text="good"
      />
      <Button 
      handleClick={props.makeNeutral}
      text="neutral"
      />
      <Button 
      handleClick={props.makeBad}
      text="bad"
      />
      <h1>No feedback given!</h1>
      </div>
    )
  }

  return (
    <div>
       <Button 
      handleClick={props.makeGood}
      text="good"
      />
      <Button 
      handleClick={props.makeNeutral}
      text="neutral"
      />
      <Button 
      handleClick={props.makeBad}
      text="bad"
      />
      <StatisticsLine show = {props.good}/>
      <StatisticsLine show = {props.neutral}/>
      <StatisticsLine show = {props.bad}/>
      <StatisticsLine show = {props.all}/>
      <StatisticsLine show = {props.average}/>
      <StatisticsLine show = {props.positive}/>
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

  const all = (good + neutral + bad)

  const average = ((good * 1 + neutral * 0 + bad * (-1)) / all)

  const positive = `${(good / all) * 100}%`

  return (
    <div>
      <Statistics 
      good = {good}
      neutral = {neutral}
      bad = {bad}
      makeGood = {makeGood}
      makeNeutral = {makeNeutral}
      makeBad = {makeBad}
      all = {all}
      average = {average}
      positive = {positive}
      />
    </div>
  )
}

export default App
