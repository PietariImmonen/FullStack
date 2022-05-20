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

export default Course