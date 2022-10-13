import { useState } from 'react'
import './index.scss'





export default function Index (){
const [mesx , setmes]= useState ('')
const [diax , setdia]= useState (0)
const [resp , setresp]=useState('')

function libra (mes , dia){
    try{    
    Number(dia)
    if (( mes === 'setembro' && (dia >=  23 && dia<=31 )) || ( mes === 'outubro' && (dia >= 1 && dia <=22) )) {
      return setresp('Sim ')         
    }
     return setresp('NÃO')
}catch(err){
    console.log(err.message)
}
}
    return(
        <main className='Div-Mae'>
            <div>
                <h1>Exercício 2</h1>
            </div>
            <div>
                <input type='text' placeholder=' digite o mês' onChange={e => setmes(e.target.value)}/>&ensp;
                <input type='number' placeholder=' digite o dia' value={diax} onChange={e => setdia(e.target.value)}/> &ensp;
                <button onClick={() => libra(mesx , diax)}> É LIBRA ? </button>
            </div>
            {resp}
        </main>
    )
}