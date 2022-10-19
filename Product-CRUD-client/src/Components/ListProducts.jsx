import React, { useState,useEffect } from 'react'
import Axios from 'axios'

const ListProducts = () => {
  let [products,setProducts] = useState([])
  useEffect(()=>{
    Axios.get("http://127.0.0.1:5000/api/products").then((res)=>{
      setProducts(res.data)
    }).catch(()=>{})
  },[])
  return (
    <>
      <div className="container mt-5">
        {/* <pre>{JSON.stringify(products)}</pre> */}
        <div className="row">
        {
          products.length > 0 ? <>
          {
            products.map((product)=>{
              return <div className="col-md-3">
                <div className="card mt-5">
                  <div className="card-header"></div>
                    <div className="card-body">
                      <ul className="list-group">
                        <li className="list-group-item">{product.name}</li>
                        <li className="list-group-item">{product.image}</li>
                        <li className="list-group-item">{product.price}</li>
                        <li className="list-group-item">{product.qty}</li>
                      </ul>
                    </div>
                  </div>
                </div>
            })
          }
          </> : 
          <h1>No Products are created</h1>
        }
        </div>
      </div>
    </>
  )
}

export default ListProducts
