import React from 'react'
import { useState } from 'react'
import Axios from 'axios'
import { Navigate } from 'react-router-dom'

const CreateProduct = () => {
  let [submitted, setSubmitted] = useState(false)
  let [products, setProduct] = useState({
    name: "",
    image: "",
    price: "",
    qty: "",
    info: ""
  })

  let UpdateData = (event) => {
    setProduct({ ...products, [event.target.name]: event.target.value })
  };
  let submitHandler = (event) => {
    event.preventDefault();
    let url = 'http://127.0.0.1:5000/api/products/'
    Axios.post(url, products).then((resp) => {
      setSubmitted(true)
    }).catch(() => { })
  };
  let changeImage = (event) => {
    let imageFile = event.target.files[0]
    let reader = new FileReader()
    reader.readAsDataURL(imageFile)

    reader.addEventListener("load", () => {
      if (reader.result) {
        setProduct({ ...products, image: reader.result })
      }
    })
  };
  return <>

    <div>CreateProduct</div>
    <pre>{JSON.stringify(products)}</pre>
    <pre>{JSON.stringify(submitted)}</pre>
    {submitted ? <Navigate to="/listProduct" />

      : <>
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className="card">
                <div className="card-header bg-info text-white">
                  <h1>Create Product</h1>
                </div>
                <div className="card-body">
                  <form onSubmit={submitHandler} >
                    <div className='form-group'>
                      <input type="text" className='form-control' name='name' onChange={UpdateData} placeholder=' Name' />
                    </div>
                    <div className='form-group'>
                      {/* <input type="text" className='form-control' name='image'onChange={UpdateData} placeholder=' Image' /> */}
                      <input name="image" type="file" className="form-control-file" placeholder="Product Name" onChange={changeImage} />
                    </div>
                    <div className='form-group'>
                      <input type="number" className='form-control' name='qty' onChange={UpdateData} placeholder=' Qty' />
                    </div>
                    <div className='form-group'>
                      <input type="number" className='form-control' name='price' onChange={UpdateData} placeholder=' Price' />
                    </div>
                    <div className='form-group'>
                      <textarea name="Info" className='form-control' placeholder='info' onChange={UpdateData} cols="90" rows="3"></textarea>
                      {/* <input type="text-area" className='form-control' name='Information'placeholder='Info ' /> */}
                    </div>
                    <input type="submit" value="Create Product" className='btn btn-warning' />
                  </form>
                </div>
              </div>

            </div>
          </div>
        </div>

      </>}


  </>


}

export default CreateProduct