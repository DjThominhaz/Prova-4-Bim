import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Ex1 from './pages/Ex1/index.js'
import Ex2 from './pages/Ex2/index.js'
import Ex3 from './pages/Ex3/index.js'
import Ex4 from './pages/Ex4/index.js'
import Ex5 from './pages/Ex5/index.js'
import Ex6 from './pages/Ex6/index.js'
import Ex7 from './pages/Ex7/index.js'
import Ex8 from './pages/Ex8/index.js'
import Ex9 from './pages/Ex9/index.js'
import Ex10 from './pages/Ex10/index.js'



export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Ex1 />} />
                <Route path='/Ex2' element={<Ex2 />}/>
                <Route path='/Ex3' element={<Ex3/>} />
                <Route path='/Ex4' element={<Ex4/>} />
                <Route path='/Ex5' element={<Ex5/>} />                
                <Route path='/Ex6' element={<Ex6/>} />
                <Route path='/Ex7' element={<Ex7/>} />
                <Route path='/Ex8' element={<Ex8/>} />
                <Route path='/Ex9' element={<Ex9/>} />
                <Route path='/Ex10' element={<Ex10/>} />



            </Routes>
        </BrowserRouter>
    )
}