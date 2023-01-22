import "../App.css"
import Course from "./Course"
import AddCourse from "./AddCourse"
import RemoveTerm from "./RemoveTerm"

const Term = ({callback}) => {
  return (
    <>
      <div className="term">
        <h2>term</h2>
        <div className="removeTermBtn">
        <RemoveTerm callback={callback}/>
          </div>
        <h4>term credits: 69</h4>

        <Course />
        <AddCourse/>
      </div>
    </>
  )
}

export default Term
