import { useState } from 'react'
import './index.scss'


export default function Index(){
    const[x, setX] = useState(0);
    const [Res, setRes]= useState(0);

    function CriarLinha(){
    let a = []
        
        for( let comeco = 1; comeco <= x ; comeco++)
        {
            
            a = [...a,'*']
        }
            return setRes(a)
    }

    
    return(
        <main className='Div-Mae'>
           <h1> Exercicio 10 </h1>
           
           <input value={x} onChange={e => setX(e.target.value)} />
            <button onClick={() => CriarLinha()}> calcular </button>
            <p> {Res} </p>
        
        
        </main>
    )
}


