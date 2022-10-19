import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return <>
    <nav className='navbar navbar-dark bg-dark text-white navbar-expand-lg'>
        <Link to='/' className="navbar-brand">ProductApp-CRUD</Link>
        <ul className="navbar-nav ml-auto">
            <li className="nav-list"><Link to='/CreateProduct' className='nav-link'>CreateProduct</Link></li>
            <li className="nav-list"><Link to='/ListProducts' className='nav-link'>ListProducts</Link></li>
            <li className="nav-list"><Link to='/Admin' className='nav-link'>Admin</Link></li>
        </ul>  
    </nav>
    </>
}

export default Navbar
