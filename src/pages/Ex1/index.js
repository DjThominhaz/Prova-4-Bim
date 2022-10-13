import './index.scss'
import { useState } from 'react'


export default function Index (){
    const [qtdpeqv , setqtdpeq] = useState(0)
    const [qtdmedv , setqtdmed] = useState(0)
    const [qtdgrav , setqtdgra] = useState(0)
    const [descv , setdesc] = useState(0)
    const [vlfinal , setvlfinal] = useState(0)


function valorfinal (qtdpeq, qtdmed ,qtdgra , desc){
    try {
        Number(qtdpeq, qtdgra ,qtdmed ,desc)
        let x = (((qtdpeq*13.50)+(qtdmed*15)+(qtdgra*17.50))*desc)/100
        
        console.log(desc)
        setvlfinal('O VALOR FINAL É R$ '+ x.toFixed(2))
    } 
    catch (err) 
    {
        console.log(err.message)
    }
}


    return(
        <main className='Div-Mae'>
            <div>
                Exercício 1 
            </div>
            <div>
                <input type='number' placeholder='Açaís Pequenos' onChange={e => setqtdpeq(e.target.value)} />
                <input type='number' placeholder='Açaís Medios' onChange={e => setqtdmed(e.target.value)} />
                <input type='number' placeholder='Açaís Grandes' onChange={e => setqtdgra(e.target.value)} />
                <input type='number' placeholder='Desc' onChange={e => setdesc(e.target.value)}/>
                
                <button onClick={() => valorfinal(qtdpeqv,qtdmedv,qtdgrav,descv)}>Precificar</button>

                <div>
                    <h1> Preço</h1>
                    {vlfinal}
                </div>

            </div>    

        </main>
    )
}