import "../App.css"

const Course = () => {
  let array = [
    { name: "CPSC110", creds: 4 },
    { name: "CPSC210", creds: 4 },
    { name: "CPSC310", creds: 4 },
  ]

  return (
    <div className="courses">
      <div>courses</div>
      {array.map((i)=>(
        <div className="course">
            {i.name}
        </div>
      ))}
    </div>
  )
}

function setLabels() {}

export default Course
