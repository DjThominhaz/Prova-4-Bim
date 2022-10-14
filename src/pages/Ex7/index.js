import './index.scss'
import { useState } from "react";



export default function Index(){

    const[Dia, setDia] = useState('')
    const[Inteira, setInteira] = useState(0)
    const[Meias, setMeias] = useState(0)
    const[nacional, setNacional] = useState(false)
    const[Res, setRes] = useState('')



    function totcompraingressos(){
         let x = (Inteira * 28.50 + Meias * 14.25)
         let msg= 'O preço final é  ' + x
           
         if(Dia== 'Quarta-Feira')
           {x = Inteira * 14.25 + Meias * 14.25
                msg = 'O preço final é  ' + x 
           }
        
        else if (nacional == true)
            {x = (Inteira * 5 + Meias * 5)
                msg = 'O Preço Final é ' + x
            }
            setRes(msg)
}

    return(
        <main className="Div-Mae">
            
            <p> Quantidade de Inteiras </p>
            <input value={Inteira} onChange={e => setInteira(e.target.value)} />
            <p> Quantidade de Meias </p>
            <input value={Meias} onChange={e => setMeias(e.target.value)} />
            <p> Dia da Semana </p>
            <input value={Dia} onChange={e => setDia(e.target.value)} />
            <p> É um filme nacional ? </p>
            
            <input checked={nacional} type='checkbox' onChange={e => setNacional(e.target.checked)} />
            
            <button onClick={totcompraingressos} >Calcular </button>

                <p> Preço final: {Res} </p>

        </main>

    )
}