import Axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import {Navigate}from 'react-router-dom'
const AdminPage = () => {
  let [deleted,setDeleted]=useState(false)
  let [products, setProduct] = useState([])
  useEffect(() => {
    Axios.get("http://127.0.0.1:5000/api/products").then((response) => {
      setProduct(response.data)
    }).catch(() => { })
  }, [])

let deleteProduct=(id)=>{
  let url = `http://127.0.0.1:5000/api/products/${id}`
Axios.delete(url).then((resp)=>{
  setDeleted(true)
}).catch(()=>{})
};

  return <>
    <div>AdminPage</div>
    <div className="container">
      <pre>{JSON.stringify(products)}</pre>
      <div className="row">
        <div className="col-md-8">
          <table className='table table-hover'>
            <thead className="bg-dark text-white">
              <tr>
                <th>Product Name</th>
                <th>price</th>
                <th>Qty</th>
                <th>Total Price</th>
                <th>Image</th>
                <th>Modify</th>
              </tr>
            </thead>
            <tbody>
              {deleted?<><Navigate to="/adminPage"/>
              {products.length > 0 ? <>
                {products.map((product,index) => {
                  return <tr key={product._id}>
                    <td>{product.name}</td>
                    <td>{product.price}</td>
                    <td>{product.qty}</td>
                    <td>{(product.price)*(product.qty)}</td>
                    <td><img src={product.image} alt="" /></td>
                    <td><button className='btn btn-success'>Edit</button><button onClick={deleteProduct.bind(this,product._id)} className='btn btn-danger text-white'>Delete</button></td>
                  </tr>
                })}
              </> : null}
              </>
              :<>
              {products.length > 0 ? <>
                {products.map((product,index) => {
                  return <tr key={product._id}>
                    <td>{product.name}</td>
                    <td>{product.price}</td>
                    <td>{product.qty}</td>
                    <td>{(product.price)*(product.qty)}</td>
                    <td><img src={product.image} alt="" /></td>
                    <td><button className='btn btn-success'>Edit</button><button onClick={deleteProduct.bind(this,product._id)} className='btn btn-danger text-white'>Delete</button></td>
                  </tr>
                })}
              </> : null}
              </>}
              
            </tbody>

          </table>
        </div>
      </div>
    </div>
  </>

}

export default AdminPage