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
            <Navegador texto="Navegacao Dinâmica" destino="/cliente/sp/123" cor="#AFFA0F" />
            <Navegador texto="Componente com estado" destino="/estado" cor="#AFFAFF" />
            <Navegador texto="Integração com API #01" destino="/integracao_1" cor="#FFAFFA" />


        </div>
    )
}