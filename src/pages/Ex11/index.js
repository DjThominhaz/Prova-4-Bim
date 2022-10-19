import { useState } from 'react';
import './index.scss'

export default function Index(){

    const[x, SetX] = useState(0);

    function criarretangulo(){
        

        let linhas = 1;
        
        for(linhas; linhas <= x; linhas++){
            
            for(let colunas = 1; colunas <= x; colunas++){
                document.write(linhas)
            }
            document.write("<br/>")

        }
    }

return(
    <main className='Div-Mae'>
            <h1>Exercicio 11 </h1>
                <input value={x} onChange={e => SetX(e.target.value)} />
                    <button onClick={() => criarretangulo()}> Desenhar </button>

    </main>
)
}