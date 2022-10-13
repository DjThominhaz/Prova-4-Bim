import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Ex1 from './pages/Ex1/index.js'
import Ex2 from './pages/Ex2/index.js'
import Ex3 from './pages/Ex3/index.js'
import Ex4 from './pages/Ex4/index.js'
import Ex5 from './pages/Ex5/index.js'
import Ex6 from './pages/Ex6/index.js'


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
            </Routes>
        </BrowserRouter>
    )
}