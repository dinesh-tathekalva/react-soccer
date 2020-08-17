import React, { Fragment } from 'react'

function ButtonPlayer(props) {
    const {name, onSelect} = props
     
    return (
        <React.Fragment>
            <button onClick={()=>onSelect() }> {name} </button>
        </React.Fragment>
    )
}

export default ButtonPlayer

