import React from 'react'
import { Link }from "react-router-dom"
import "./Navbar.css"
let Navbar =()=>{
return <nav  className='navbar navbar-light bg-light navbar-expand-lg'>
    <Link to='' className='navbar-brand' > App Home</Link>
    <ul className='navbar-nav ml-auto'>
        <li className='nav-item'><Link to="/ProductApp" className='nav-link'>ProductApp</Link></li>&nbsp;&nbsp;
        <li className='nav-item'><Link to="/home" className='nav-link'>Home</Link></li>&nbsp;&nbsp;
        <li className='nav-item'><Link to="/createProduct" className='nav-link'>CreatePrduct</Link></li>&nbsp;&nbsp;
        <li className='nav-item'><Link to="/listProduct" className='nav-link'>Product List</Link></li>&nbsp;&nbsp;
        <li className='nav-item'><Link to="/adminPage" className='nav-link'>Admin</Link></li>&nbsp;&nbsp;
           
    </ul>
</nav>
}
export default Navbar