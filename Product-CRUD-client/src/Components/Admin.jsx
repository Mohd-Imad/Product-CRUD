import React from 'react'
import { useState, useEffect } from 'react'
import Axios from 'axios'
import { Navigate } from 'react-router-dom'

const Admin = () => {
  let [products, setProducts] = useState([])
  let [dummy, setDummy] = useState(false)
  useEffect(() => {
    Axios.get("http://127.0.0.1:5000/api/products").then((res) => {
      setProducts(res.data)
    }).catch(() => { })
  }, [])

  let deleteProduct = (id) => {
    let url = `http://127.0.0.1:5000/api/products/${id}`
    Axios.delete(url).then(() => { }).catch((res) => {
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
                      <th>Image</th>
                      <th>Price</th>
                      <th>QTY</th>
                      <th>Admin's Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      products.length > 0 ? <>
                        {
                          products.map((product) => {
                            return <tr key={product.id}>
                              <td>{product.name}</td>
                              <td>{product.image}</td>
                              <td>{product.price}</td>
                              <td>{product.qty}</td>
                              <td>
                                <button className='btn btn-warning'>Edit &nbsp;<i className='fa fa-pen'></i></button>&nbsp;
                                <button className='btn btn-danger' onClick={deleteProduct.bind(this, product._id)}>Del &nbsp;<i className='fa fa-trash'></i></button>
                              </td>
                            </tr>
                          })
                        }
                      </> : <h1>No Products are created</h1>
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
