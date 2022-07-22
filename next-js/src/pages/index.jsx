import Navegador from "../components/Navegador"

export default function Inicio(){
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Navegador texto="Exemplo" destino="/exemplo"/>
            <Navegador texto="Navegacao" destino="/navegacao" cor="#A0FA0F" />
        </div>
    )
}