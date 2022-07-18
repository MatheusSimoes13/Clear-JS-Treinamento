import './App.css'
import React from "react"

import Card from "./components/layout/Card"
import Random from "./components/basics/Random"
import First from './components/basics/First'
import WithParams from "./components/basics/WithParams"
import Fragment from "./components/basics/Fragment"

export default _ => (

        <div className="App">

            <div className="Cards">

                <Card titulo="Aleatório" color="#080">
                    <Random min={1} max={60}/>
                </Card>
                <Card titulo="Fragmento" color="#F0F">
                    <Fragment />
                </Card>
                <Card titulo="Parâmetros" color="#3DAAF4">
                    <WithParams titulo="aluno" aluno="Matheus" nota="10"/>
                </Card>
                <Card titulo="Primeiro componente">
                    <First />
                </Card>

            </div>

        </div>

)