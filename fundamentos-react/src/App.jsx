import React from "react"

import Random from "./components/basics/Random"
import First from './components/basics/First'
import WithParams from "./components/basics/WithParams"
import Fragment from "./components/basics/Fragment"

export default _ => (

        <div id="app">
            <Random min={1} max={60}/>
            <Fragment/>
            <WithParams titulo="segundo componente" aluno="Matheus" nota={9.5}/>    
            <First></First>
        </div>

)