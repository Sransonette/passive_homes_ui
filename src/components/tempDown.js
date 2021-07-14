import React from 'react'

const TempDown = (props) => {

    function onClick() {
        console.log('it worked')
    }



    return (
        <div className={"tempDown"}>
            <button onClick={onClick}>TempDown</button>
        </div>
    )
    


}

export default TempDown; 