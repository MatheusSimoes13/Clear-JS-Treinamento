import './Input.css'
import React, { useState } from "react"

export default props => {

    const [value, setValue] = useState('Inicial')

    function whenChange(e){
        setValue(e.target.value)
    }

    return (
        <div className="Input">
            <input value={value} onChange={whenChange}/>
        </div>
    )
}