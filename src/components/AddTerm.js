

const AddTerm = ({callback}) => {

    function click() {
        callback()
    }

    return(
        <button className="addTerm" onClick={() =>{click()}}>
            button
        </button>

    )

}

export default AddTerm