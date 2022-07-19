import React from "react"
import If, { Else } from "./If"

export default props => {
    const user = props.user || {}
    return (
        <div>
            <If test={user && user.name}>
                Bem vindo <strong>{ user.name }</strong>
            </If>
            <If test={!user && !user.name}>
                Bem vindo <strong> Anônimo</strong>
                <Else>
                    
                </Else>
            </If>
        </div>
    )
}