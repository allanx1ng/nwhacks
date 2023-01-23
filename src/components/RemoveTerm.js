const RemoveTerm = ({callback}) => {

    function click() {
        callback()
    }

    return(
        <button className="removeTerm" onClick={() =>{click()}}/>
    )

}

export default RemoveTerm