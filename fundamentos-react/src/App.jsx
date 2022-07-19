import './App.css'
import React from "react"

import Card from "./components/layout/Card"

import Counter from './components/counter/Counter'
import Input from './components/form/Input'
import IndirectFather from './components/communication/IndirectFather'
import DirectFather from './components/communication/DirectFather'
import UserInfo from './components/conditional/UserInfo'
import EvenOrOdd from './components/conditional/EvenOrOdd'
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
                <Card titulo="Counter" color="#AFAFAF">
                    <Counter initNumber={10} initStep={1}></Counter>
                </Card>
                <Card titulo="Componente controlado " color="#AFAFAF">
                    <Input></Input>
                </Card>
                <Card titulo="Comunicação indireta" color="#AABBFF">
                    <IndirectFather></IndirectFather>
                </Card>
                <Card titulo="Comunicação direta" color="#AA00FF">
                    <DirectFather></DirectFather>
                </Card>
                <Card titulo="Renderização condicional" color="#5500FF">
                    <EvenOrOdd number={20}></EvenOrOdd>
                    <UserInfo user={{name:'Matheus'}}></UserInfo>
                    <UserInfo user={{email:'matheus.ruff@hotmail.com'}}></UserInfo>
                </Card>
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