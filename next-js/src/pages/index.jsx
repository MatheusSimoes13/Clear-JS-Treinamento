import Link from "next/link"
import Navegador from "../components/Navegador"

export default function Inicio(){
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Navegador texto="Exemplo" destino="/exemplo"/>
        </div>
    )
}