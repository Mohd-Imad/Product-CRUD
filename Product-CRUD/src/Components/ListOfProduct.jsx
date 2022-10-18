import  Axios  from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const ListOfProduct = () => {
let [products,setProduct]=useState([])

useEffect(()=>{
    Axios.get("http://127.0.0.1:5000/api/products").then((resp)=>{
    setProduct(resp.data)
    }).catch(()=>{    })
},[])

  return <>
    <div>ListOfProduct</div>
<div className="container">
<pre>{JSON.stringify(products)}</pre>
  <div className="row">
         {
          products.length>0 ?<>
          {products.map((product)=>{
           return <div className="col-md-3">
              <div className="card">
                <div className="card-head">
                  <img src={product.image} alt="iamge"/>
                </div>
                <div className="card-body">
                  <ul>
                    <li>{product.name}</li>
                    <li>{product.price}</li>
                    <li>{product.qty}</li>
                  </ul>
                </div>
              </div>
            </div>
          })}
          </>:null
         }
  </div>
</div>


  </>

}

export default ListOfProduct