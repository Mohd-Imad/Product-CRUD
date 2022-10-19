import React from 'react'

function ProductDetails(props) {
  return <>
    <div>ProductDetails</div>
    {/* <pre>{JSON.stringify(props)}</pre> */}
    <div className="card">     
     <div className="card-header">
       <img src={props.userData.profiles.image} alt="" />
      </div>
      <div className="card-body">
       <h2>Name :{props.userData.profiles.firstName}</h2>
       <h2>Eamil :{props.userData.profiles.email}</h2>
       <h2>DOB :{props.userData.profiles.birthDate}</h2> 
      </div>
         </div>
  </>
}

export default ProductDetails