import React from 'react'

const Movies = props => {
    const {options, changeYear} = props
    return(
        <Fragment>
           <label htmlFor="years">Choose the Year:</label>
            <select name="year" onChange={changeYear}>
                {options}
            </select>
        </Fragment>
    )
}

export default Movies