import React from "react"
import ReactDOM from "react-dom"
import './index.css'
import First from './components/basics/First'
import WithParams from "./components/basics/WithParams"


const el = document.getElementById("root")
ReactDOM.render(
    <div>
        <First></First>
        <WithParams titulo="segundo componente" aluno="Matheus" nota={9.5}/>
    </div>
, el)