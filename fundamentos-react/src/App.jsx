import React from "react"
import First from './components/basics/First'
import WithParams from "./components/basics/WithParams"
import Fragment from "./components/basics/Fragment"

export default _ => (

        <div id="app">
            <Fragment/>
            <WithParams titulo="segundo componente" aluno="Matheus" nota={9.5}/>    
            <First></First>
        </div>

)