import "../App.css"
import Term from "./Term"
import AddTerm from "./AddTerm"
import { useState, useEffect } from "react"

const Schedule = () => {



  return (
    <>
    <div className="schedule">
      <div className="schedule-box">
        <Term />
        <AddTerm/>
      </div>
      

    </div>
    <p>
        credits
      </p>
    </>
    
  )
}

export default Schedule
