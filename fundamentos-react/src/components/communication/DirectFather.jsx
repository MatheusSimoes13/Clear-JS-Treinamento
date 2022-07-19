import React from "react"
import DirectSon from "./DirectSon"

export default props => {
    return (
        <div>
            <DirectSon name="Matheus" age={20} nerd={true}></DirectSon>
            <DirectSon name="Gabriel" age={22} nerd={false}></DirectSon>
        </div>

    )
}