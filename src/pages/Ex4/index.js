import './index.scss'
import { useState } from "react"


export default function Index() {
    const [sal, setSal] = useState('')
    const [bon, setbon] = useState('')
    const [desco, setDesco] = useState('')

    const [res, setres] = useState('');
    


    function salario(salario, bonus, desc){
        let x = (salario - desc)

        console.log(x)

        let c = x + (bonus * salario / 100)
        
        setres(c)
    }

    return(
        <main className='Div-Mae'>
                <h1> Exercício 4</h1>
            <h3>Salario: </h3>
            <input value={sal} onChange={e => setSal(e.target.value)} />

            <h3>Bônus em %:</h3>
            <input value={bon} onChange={e => setbon(e.target.value)} />

            <h3>Desconto em R$:</h3>
            <input value={desco} onChange={e => setDesco(e.target.value)} />
        

            <button onClick={() => salario(sal,bon,desco)}>calcular</button>

            <p>Preço:{res}</p>

        </main>




    )


}