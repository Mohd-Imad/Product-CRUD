import React from 'react'
import { useState, useEffect } from 'react'
import Axios from 'axios'
import { Navigate,Link } from 'react-router-dom'

const Admin = () => {
  let [products, setProducts] = useState([])
  let [dummy, setDummy] = useState(false)
  
  useEffect(()=>{
    getAllProducts()
  },[])
  
  let getAllProducts = ()=>{
    Axios.get("http://127.0.0.1:5000/api/products").then((res) => {
      setProducts(res.data)
    }).catch(() => { })
  }


  let deleteProduct = (productId) => {
    let url = `http://127.0.0.1:5000/api/products/${productId}`
    Axios.delete(url).then((res) => {getAllProducts()}).catch((err) => {
      setDummy(true)
    })
  }
  return (
    <>
      <div className="container">
        <pre>{JSON.stringify(products)}</pre>
        <pre>{JSON.stringify(dummy)}</pre>
        {
          dummy ? <><Navigate to='/Admin' /></> : <>
            <div className="row">
              <div className="col-md-8">
                <table className="table table-hover">
                  <thead className='bg-dark text-white'>
                    <tr>
                      <th>Product Name</th>
                      <th>Price</th>
                      <th>QTY</th>
                      <th>Image</th>
                      <th>Admin's Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      products.length > 0 ? <>
                        {
                          products.map((product) => {
                            return <tr key={product._id}>
                              <td>{product.name}</td>
                              <td>{product.price}</td>
                              <td>{product.qty}</td>
                              <td><img src={product.image}height='80px' alt="" /></td>
                              <td>
                                <Link to={`/UpdateProduct/${product._id}`} className='btn btn-warning'>Edit &nbsp;<i className='fa fa-pen'></i></Link>&nbsp;
                                <button className='btn btn-danger' onClick={deleteProduct.bind(this, product._id)}>Del &nbsp;<i className='fa fa-trash'></i></button>
                              </td>
                            </tr>
                          })
                        }
                      </> : <h1 className='mt-3'>No Products.....</h1>

                    }
                  </tbody>
                </table>
              </div>
            </div>

          </>
        }
      </div>
    </>
  )
}

export default Admin
