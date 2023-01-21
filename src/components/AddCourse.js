import courseData from "../data/courseData.json"

const AddCourse = () => {

    //var fs = require('fs');
  return (
    <>
      <div className="addCourse"></div>
      <select name="cars" id="cars">
        {courseData.map((i) => (
          <option>{i.name}</option>
        ))}
      </select>
    </>
  )
}

export default AddCourse
