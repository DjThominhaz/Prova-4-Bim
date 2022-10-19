import { useState } from 'react'
import './index.scss'


export default function Index(){
    const[linha, setLinha] = useState(0)
    const[colunas, setColunas] = useState(0)

    function retanguloImagem(){ 
        let array =[]
        let x = 0
        let z = 0

        for(x; x <linha; x++){
            array[x] = '<img src = " https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/168px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg " />'
        }

        for(z; z <colunas; z++){
            document.write(`<p> ${array} </p>`)
        }
    }  

    return(
        <main className='Div-Mae'>
                <h1> Exercicio 11 Usando imagem</h1>
                <input value={linha} onChange={e => setLinha(e.target.value)} />
                <input value={colunas} onChange={e => setColunas(e.target.value)} />

                <button onClick={retanguloImagem}>Desenhar </button>
        </main>
    )
}