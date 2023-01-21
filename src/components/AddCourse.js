import courseData from "../data/courseData.json"
import { useState, useEffect } from "react"

const AddCourse = () => {
  const [courseSelectVisible, setCourseSelectVisible] = useState(false)

  function buttonClick() {
    setCourseSelectVisible(!courseSelectVisible)
    console.log(courseSelectVisible)
  }

  return (
    <>
      <button className="addCourse" onClick={()=>buttonClick()}></button>

      <div style={courseSelectVisible ? {display: "block"}:{
        display: "none"
      }}>
        <select name="cars" id="cars">
          {courseData.map((i) => (
            <option>{i.name}</option>
          ))}
        </select>
      </div>
    </>
  )
}

export default AddCourse
