import { useState } from 'react'
import './index.scss'


export default function Index(){
const [itens, setItens] = useState([])
const[alunos, setalunos] = useState(0)
const [nota, setNota] = useState()
//const[res, SetRes]= useState(0)


//function GerarCampos(){

//    let texto = []
//    let x = ("<input type = 'number' />");
 //   let z = toString(x)

//    let i = 0
//        while( i <= alunos){
//            texto[i] = z;
//            i++
 //       }
 //   SetRes(texto)
//}

function NotasG() {
    let a = []
    for(let i = 1; i <= alunos; i++) {
        a = [...a,i]
}
setItens(a)
}

function soma() {
    console.log(nota*itens)
}

    return(
        <main className='Div-Mae'>
                <h1> Exercício Sistema de Notas</h1>
                <input type='number' onChange={e=> setalunos(Number(e.target.value))} />
                <button onClick={NotasG} >OK </button>
                
        {itens.map( (item, i) => 
            <section>
                <p> Aluno: {i + 1} </p>
                <input type='text' onChange={e => setNota(e.target.value)} />
            </section>
        )}
            <button onClick={soma}> Calcular </button>

        </main>
    )
}