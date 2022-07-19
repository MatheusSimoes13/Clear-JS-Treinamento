import React from "react"

export default props => {
    const callback = props.whenClick
    return (
        <div>
            <div>
                Filho
            </div>
            <button onClick={
                _ => {
                    callback('João',50, true)
                }
            }>Fornecer informações</button>
        </div>
    )
}