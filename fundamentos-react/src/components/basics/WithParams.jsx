import React from "react"

export default function WithParams(props){
    return (
        <div>
            <h2>{props.titulo}</h2>
            <p>{props.aluno} tem nota {props.nota}</p>
        </div>
    )


}