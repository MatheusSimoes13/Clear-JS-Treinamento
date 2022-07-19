import React, { useState } from "react"
import IndirectSon from "./IndirectSon"

export default props => {
    const [name, setName] = useState('default')
    const [age, setAge] = useState(0)
    const [nerd, setNerd] = useState(false)

    function giveInfo(nameParam, ageParam, nerdParam){
        setName(nameParam)
        setAge(ageParam)
        setNerd(nerdParam)
    }

    return (
        <div>
            <div>
                <span>{name} </span>
                <span>{age} </span>
                <span>{nerd ? 'Verdadeiro' : 'Falso'}</span>
            </div>

            <IndirectSon whenClick={giveInfo}></IndirectSon>
        </div>

    )
}