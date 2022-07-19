import React from "react"

export default props => {
    const callback = props.whenClick
    const min = 50
    const max = 70
    const generateAge = () => parseInt(Math.random() * (20)) + 50
    return (
        <div>
            <div>
                Filho
            </div>
            <button onClick={
                _ => {
                    callback('João',generateAge(), true)
                }
            }>Fornecer informações</button>
        </div>
    )
}