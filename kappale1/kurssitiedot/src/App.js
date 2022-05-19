


const Header = (props) => {
  return (
    <div>
      <h1>{props.header}</h1>
    </div>
  )
}

const Part = (props) => {
  return(
    <div>
      <p>
        {props.part} {props.exercises}
      </p>
    </div>
  )
}

const Content = (props) => {
  const part1 = props.part[0].name
  const part2 = props.part[1].name
  const part3 = props.part[2].name
  const exercises1 = props.part[0].exercises
  const exercises2 = props.part[1].exercises
  const exercises3 = props.part[2].exercises

  return (
    <div>
      <Part part={part1} exercises={exercises1}/>
      <Part part={part2} exercises={exercises2}/>
      <Part part={part3} exercises={exercises3}/>
    </div>
  )
}




const Total = (props) => {
  return (
    <div>
      <p>Number of exercises {props.part[0].exercises + props.part[1].exercises + props.part[2].exercises}</p>
    </div>
  )
}


export default function App() {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div className="1">
      <Header header={course.name}/>
      <Content 
      part = {course.parts}
      />
      <Total 
      part = {course.parts}
      />
    </div>
  )
}

