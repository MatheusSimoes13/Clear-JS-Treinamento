import './App.css'
import React from "react"

import Card from "./components/layout/Card"

import ProductTable from './components/repetition/ProductTable'
import StudentList from './components/repetition/StudentList'
import Family from './components/basics/Family'
import FamilyMember from './components/basics/FamilyMember'
import Random from "./components/basics/Random"
import First from './components/basics/First'
import WithParams from "./components/basics/WithParams"
import Fragment from "./components/basics/Fragment"

export default _ => (

        <div className="App">

            <div className="Cards">
                <Card titulo="Repetição produtos" color="#55FFF3">
                    <ProductTable></ProductTable>
                </Card>
                <Card titulo="Repetição" color="#FFAB03">
                    <StudentList></StudentList>
                </Card>
                <Card titulo="Componente com filhos" color="#080">
                    <Family surname="Simões">
                        <FamilyMember name="Matheus"></FamilyMember>
                        <FamilyMember name="Ruf" ></FamilyMember>
                        <FamilyMember name="João"></FamilyMember>
                    </Family>
                </Card>
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