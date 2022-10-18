import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import AdminPage from './Components/AdminPage'
import CreateProduct from './Components/CreateProduct'
import Home from './Components/Home'
import ListOfProduct from './Components/ListOfProduct'
import Navbar from "./Navbar/Navbar"
import ProductApp from './ProductApp/ProductApp'
/* import Search from './Search/Search' */

let App=()=>{

    return <Router>
        
        <Navbar/>
       {/*  <Search/> */}
        <Routes>
        <Route exact path='/home' element={<Home/>}/>
            <Route exact path='/ProductApp' element={<ProductApp/>}/>
            <Route exact path='/createProduct' element={<CreateProduct/>}/>
            <Route exact path='/listProduct' element={<ListOfProduct/>}/>
            <Route exact path='/adminPage' element={<AdminPage/>}/>
            
        </Routes>
    </Router>
}
export default App