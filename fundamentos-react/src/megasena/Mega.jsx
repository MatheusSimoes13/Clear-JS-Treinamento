import React, { useState } from "react"

export default props => {

    function generateNumber(min, max){

        return Math.floor(
            Math.random() * (max - min)
        )
    
    }
    
    function getMegasena(){
    
        const result = []
        for(let i = 0; i < 6; i++){
    
            let newNumber = generateNumber(1, 60)
            if(!result.includes(newNumber)){
                result.push(newNumber)
            }
    
        }
    
        return result.sort((n1, n2) => n1 - n2)
    }
    
    const mega = getMegasena()
    const [numbers, setNumbers] = useState(() => mega)



    return (
        <div>
            <h2>Resultado</h2>
            <h3>{numbers.join(' ')}</h3>
        </div>
    )
}