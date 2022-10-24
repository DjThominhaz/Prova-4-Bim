import { useState } from 'react'
import './index.scss'


export default function Index(){
    const[N, SetN] = useState(0)
    const[L, SetL] = useState(0)
    const[D, SetD] = useState(0)
    const[res, SetRes]= useState(0)

    function café(){
        let z = D/1000
        let x = N * z
        let qtd = 0
        
        while(qtd < x){
            qtd= qtd + L
        }
         let a = qtd
          return SetRes(a)
        
    }



    return(
        <main className='Div-Mae'> 
            <h1> Exercicio 13 Café</h1>
                
                <input type='number' onChange={e=> SetN(Number(e.target.value))} />
                <input type='number' onChange={e=> SetL(Number(e.target.value))} />
                <input type='number' onChange={e=> SetD(Number(e.target.value))} />
                <button onClick={café}>Calcular</button>
                {res}
        </main>
    )
}