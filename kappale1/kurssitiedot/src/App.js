


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

const Content = ({part}) => {
  return (
    <div>
      {part.map(p => {
        return(
          <h1 key={p.id}><Part part={p.name} exercises={p.exercises} /></h1>
        )
      })}
    </div>
  )
}




const Total = ({number}) => {
  const sum = number.reduce((a, b) => a + b.exercises, 0)

  return (
    <div>
      <p>{sum}</p>
    </div>
  )
}

const Course = ({course}) => {
  return (
    <div>
      <Header header={course.name}/>
      <Content 
      part = {course.parts}
      />
      <Total number = {course.parts}/>
    </div>
  )
}


const App = () => {
  const course = {
    name: 'Half Stack application development',
    id: 1,
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return (
    <div>
      <Course course={course} />
    </div>
  )
}

export default App


/*<Header header={course.name}/>
      <Content 
      part = {course.parts}
      />
      <Total 
      part = {course.parts}
      /> */

