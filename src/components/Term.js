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


        <Course />
        <AddCourse/>
      </div>
    </>
  )
}

export default Term
