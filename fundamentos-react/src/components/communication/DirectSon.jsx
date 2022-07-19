import React from "react"

export default props => {
    return (
        <div>
            <div>{props.name}</div>
            <div>{props.age}</div>
            <div>{props.nerd ? 'Verdadeiro' : 'Falso'}</div>
        </div>
    )
}