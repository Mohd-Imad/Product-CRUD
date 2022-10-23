import React, { useState } from 'react'
import Axios from 'axios'
import { Navigate, useParams } from 'react-router-dom'
import { useEffect } from 'react'

const UpdateProduct = () => {
  let [selectedProduct, setSelectedProduct] = useState({
    name: "",
    image: "",
    price: "",
    qty: "",
    info: ""
  })

  let [productId, setProductId] = useState(useParams().id)
  let [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    let dataUrl = `http://127.0.0.1:5000/api/products/${productId}`
    Axios.get(dataUrl).then((res) => {
      setSelectedProduct(res.data)
    }).catch(() => { })
  }, [productId])

  let changeInput = (event) => {
    setSelectedProduct({
      ...selectedProduct,
      [event.target.name]: event.target.value
    })
  }


  let changeImage =async (event) => {
    let imageFile = event.target.files[0]
    let reader = new FileReader()
    reader.readAsDataURL(imageFile)
    reader.addEventListener("load", () => {
      if (reader.result) {
        setSelectedProduct({ ...selectedProduct, image: reader.result })
      }
    })
  }

  let submitHandler = (event) => {
    event.preventDefault()
    let url = `http://127.0.0.1:5000/api/products/${productId}`
    Axios.put(url, selectedProduct).then((res) => {
      setSubmitted(true)
    }).catch(() => { })
  }

  return (
    <>
      {
        submitted ? <><Navigate to='/Admin' /></> :
          <div className="container mt-5">
            <pre>{JSON.stringify(selectedProduct)}</pre>
            <div className="row">
              <div className="col-md-5">
                <div className="card">
                  <div className="card-header bg-dark text-white text-center">
                    <h1>Update Product</h1>
                  </div>
                  <div className="card-body">
                    <form onSubmit={submitHandler}>
                      <div className="form-group">
                        <input type="text" value={selectedProduct.name} name="name" placeholder='Product Name' className='form-control' onChange={changeInput} />
                      </div>
                      <div className="form-group">
                        <input type="file" name="image" placeholder='Image' className='form-control' onChange={changeImage} />
                      </div>
                      <div className="form-group">
                        <input type="number" value={selectedProduct.price} name="price" placeholder='Price' className='form-control' onChange={changeInput} />
                      </div>
                      <div className="form-group">
                        <input type="number" value={selectedProduct.qty} name="qty" placeholder='QTY' className='form-control' onChange={changeInput} />
                      </div>
                      <div className="form-group">
                        <input type="text" value={selectedProduct.info} name="info" placeholder='Info' className='form-control' onChange={changeInput} />
                      </div>
                      <input type="submit" value="Update Product" className='btn btn-dark text-white' />
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
      }
    </>
  )
}

export default UpdateProduct
