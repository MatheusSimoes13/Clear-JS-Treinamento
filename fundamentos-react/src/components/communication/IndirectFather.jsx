import React from "react"
import IndirectSon from "./IndirectSon"

export default props => {
    let name = 'default'
    let age = 0
    let nerd = false

    function giveInfo(nameParam, ageParam, nerdParam){
        name = nameParam
        age = ageParam
        nerd = nerdParam
        console.log(name,age,nerd)
    }

    return (
        <div>
            <div>
                <span>{name}</span>
                <span>{age}</span>
                <span>{nerd ? 'Verdadeiro' : 'Falso'}</span>
            </div>

            <IndirectSon whenClick={giveInfo}></IndirectSon>
        </div>

    )
}