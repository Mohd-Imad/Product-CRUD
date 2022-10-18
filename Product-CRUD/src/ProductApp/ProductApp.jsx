import axios, { Axios } from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

import ProductDetails from './ProductDetails'
import ProductList from './ProductList'


let ProductApp = () => {

    let [data, setData] =  useState({})
    let [profiles, setProfiles] =  useState({})

    let selprofile = (user) => {
        console.log(user)
        setProfiles({profiles:user})
    };

    useEffect(() => {
        axios.get('https://gist.githubusercontent.com/karkuvelpandi/49cedc34071f93328bbe0017ec862adb/raw/85ab14572b25fcbb6176683a26c5aa22e41cc480/User%2520%257BObject%257D-Detail-Dummy%2520data')
            .then((response) => {
                setData({ data: response.data })
            }).catch(() => { })
    }, [])


    return <>
        <h1>Product APP</h1>
        {/* <pre>{JSON.stringify(data)}</pre> */}
        {/* <pre>{JSON.stringify(profiles)}</pre> */}


        <div className="container">
           
            <div className="row">
                <div className="col-md-8">
                    
                {Object.keys(data).length>0?<>
                    {<ProductList userData={data} selprofile={selprofile} />}
                    </>:null}    
                </div>

                <div className="col-md-4">
                    {Object.keys(profiles).length>0?<>
                        {<ProductDetails userData={profiles} />}
                    </>:null}
                    
                </div>
            </div>
        </div>
    </>     
}
export default ProductApp