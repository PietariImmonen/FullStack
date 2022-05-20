


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
          <Part part={p.name} exercises={p.exercises}/>
        )
      })}
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

const Course = ({course}) => {
  return (
    <div>
      <Header header={course.name}/>
      <Content 
      part = {course.parts}
      />
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

