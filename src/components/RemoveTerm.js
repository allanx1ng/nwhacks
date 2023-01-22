const RemoveTerm = ({callback}) => {

    function click() {
        callback()
    }

    return(
        <button className="removeTerm" onClick={() =>{click()}}>
            remove term
        </button>
    )

}

export default RemoveTerm