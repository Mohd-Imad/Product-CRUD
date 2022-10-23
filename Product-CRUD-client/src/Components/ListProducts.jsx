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
                  <div className="card-header"><center><img src={product.image}height='120pc' width='100pc' alt="" /></center></div>
                    <div className="card-body">
                      <ul className="list-group">
                        <li className="list-group-item"><b>Name : </b>{product.name}</li>
                        <li className="list-group-item"><b>Price : </b>{product.price}</li>
                        <li className="list-group-item"><b>QTY : </b>{product.qty}</li>
                      </ul>
                    </div>
                  </div>
                </div>
            })
          }
          </> : 
          <h1 className='mt-3'>No Products are created.....</h1>
        }
        </div>
      </div>
    </>
  )
}

export default ListProducts
