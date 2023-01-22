import "../App.css"
import Term from "./Term"
import AddTerm from "./AddTerm"
import { useState, useEffect } from "react"

const Schedule = () => {

    const [arr, setArr] = useState([0])

    const test = () => {
        arr.push(0)
        setArr([...arr])
    }
    const test2 = () => {
      arr.pop();
      setArr([...arr])
  }
    
  return (
    <>
      <div className="schedule">
        <div className="schedule-box">
          {arr.map(()=>(
            <Term callback={test2}/>
          ))}
          <AddTerm callback={test}/>
        </div>
      </div>
      <div>credits</div>
    </>
  )
}

export default Schedule
