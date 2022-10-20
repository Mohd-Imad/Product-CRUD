import React, { useState } from 'react'
import Axios from 'axios'
import { Navigate } from 'react-router-dom'

const UpdateProduct = () => {
  let [product, setProduct] = useState({
    name: "",
    image: "",
    price: "",
    qty: "",
    info: ""
  })

  let [submitted, setSubmitted] = useState(false)

  let productData = (event) => {
    setProduct({
      ...product,
      [event.target.name]: event.target.value
    })
  }

  let changeImageToString = (event)=>{
    let imageFile = event.target.files[0]
    let reader = new FileReader()
    reader.readAsDataURL(imageFile)
    reader.addEventListener("load",()=>{
      if(reader.result){
        setProduct({...product,image : reader.result})
      }
    })
  }

  let submitHandler = (event) => {
    event.preventDefault()
    let url = "http://127.0.0.1:5000/api/products/"
    Axios.post(url, product).then((res) => {
      setSubmitted(true)
    }).catch(() => { })
  }

  return (
    <>
      <div className="container mt-5">
        <pre>{JSON.stringify(product)}</pre>
        {
          submitted ? <><Navigate to='/ListProducts' /></> :
            <>
              <div className="row">
                <div className="col-md-5">
                  <div className="card">
                    <div className="card-header bg-dark text-white text-center">
                      <h1>Update Product</h1>
                    </div>
                    <div className="card-body">
                      <form onSubmit={submitHandler}>
                        <div className="form-group">
                          <input type="text" name="name" placeholder='Product Name' className='form-control' onChange={productData} />
                        </div>
                        <div className="form-group">
                          <input type="file" name="image" placeholder='Image' className='form-control' onChange={changeImageToString} />
                        </div>
                        <div className="form-group">
                          <input type="number" name="price" placeholder='Price' className='form-control' onChange={productData} />
                        </div>
                        <div className="form-group">
                          <input type="number" name="qty" placeholder='QTY' className='form-control' onChange={productData} />
                        </div>
                        <div className="form-group">
                          <input type="text" name="info" placeholder='Info' className='form-control' onChange={productData} />
                        </div>
                        <input type="submit" value="Update Product" className='btn btn-dark text-white' />
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </>
        }
      </div>
    </>
  )
}

export default UpdateProduct
