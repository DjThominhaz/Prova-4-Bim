import { useState } from 'react'
import './index.scss'


export default function Index(){
    const[comeco, setcomeco] = useState(0)
    const[final, setfinal] = useState(0)
    const[Res, setRes] = useState(0)

    function CriarSequencia(x,y){
        let a = []

         x = comeco
         y= final


        for(x = 1; x <= y; x++)
        {
            a = [...a,x]
        }
        return setRes(a)
    }

    return(

        <main className='Div-Mae'> 
            <h1> Exercicio 9 </h1>
                <input value={comeco} onChange={e => setcomeco(e.target.value)} />
                <br/>
                <input value={final} onChange={e => setfinal(e.target.value)} />

                <button onClick={() => CriarSequencia()}> calcular </button>
                
                <p> {Res} </p>
        

        </main>
    )
}