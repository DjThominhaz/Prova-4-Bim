import { useState } from 'react'
import './index.scss'

export default function Index() {
    const [Capacidade ,setCapacidade]=useState(0)
    const [C, setC] = useState(0)
    const [D, setD] = useState(0)
    const [Res , setRes]= useState(0)

    function paradas (capacidade , C , Distancia){
        Number(capacidade,C,Distancia)
        let x = Distancia/(C*capacidade)
        
        setRes(Math.ceil(x))
    }

    return(

        <main className='Div-Mae'>
        <div>
            <h1>Exercício 5</h1>
        </div>
        <div>
            <input type='number' placeholder=' Capacidade' onChange={e => setCapacidade(e.target.value)}/>&ensp;
            <input type='number' placeholder=' Consumo'  onChange={e => setC(e.target.value)}/> &ensp;
            <input type='number' placeholder=' Distância' onChange={e => setD(e.target.value)}/>&ensp;
            
            <button onClick={() => paradas(Capacidade,C , D)}>calcular </button>
        </div>
            {Res}
    </main>
    )





}