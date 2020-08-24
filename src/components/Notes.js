import React from 'react'

const notes = props => {
    const {email, age} = props
    return(
        <React.Fragment>
            {/* <p>This is {name} Notes area</p>
            <p>He is {age} old</p>
            <input ></input>
             */}
            <p>{email}</p>
        </React.Fragment>
    )
}

export default notes