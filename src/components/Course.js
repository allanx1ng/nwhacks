import "../App.css"
import { useState, useEffect } from "react"

const Course = () => {

  const [creds, setCreds] = useState(0)

  useEffect(() => {
    initiateCreds()
  }, [creds])

  function initiateCreds() {
    let n = 0;
    for (let i = 0; i<array.length; i++) {
      n+=array[i].creds
    }
    setCreds(n)
  }

  

  let array = [
    { name: "CPSC110", creds: 4 },
    { name: "CPSC210", creds: 4 },
    { name: "CPSC310", creds: 4 },
  ]

  return (
    <div className="courses">
      <h4>term credits: {creds}</h4>
      <div>courses</div>
      {array.map((i) => (
        <div className="course">{i.name}</div>
      ))}

    </div>
  )
}

function setLabels() {}

export default Course
