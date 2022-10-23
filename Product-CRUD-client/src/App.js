import React from 'react'
import Navbar from './Navbar/Navbar'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom' 
import CreateProduct from './Components/CreateProduct'
import ListProducts from './Components/ListProducts'
import Admin from './Components/Admin'
import UpdateProduct from './Components/UpdateProduct'
let App=()=>{

    return <>
        <Router>
            <Navbar />
            <Routes>
                <Route path='/CreateProduct' element={<CreateProduct />} />
                <Route path='/ListProducts' element={<ListProducts />} />
                <Route path='/Admin' element={<Admin />} />
                <Route path='/UpdateProduct/:id' element={<UpdateProduct />} />
            </Routes>
        </Router>
    </>
}
export default App