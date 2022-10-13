import { useState } from 'react'
import './index.scss'

export default function Index() {

    const [gramas, setGramas] = useState(0)
    const [resp, setResp] = useState(0)

    function calcular(gramas){
        let x = 0.035;

        if(gramas >= 1000 )
            x = 0.030

        console.log(gramas)

        setResp(gramas * x)
    }


    return(

            <main className='Div-Mae'>
                <h1>Quantas Gramas de Açaí vai ser SR. ??: </h1>

                <input value={gramas} onChange={e => setGramas(e.target.value) }/>

                <button onClick={() => calcular(gramas)}>calcular</button>

                <p>R${resp} Reais</p>

            </main>

    )





}