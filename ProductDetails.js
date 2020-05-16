import React from 'react'
import ProductsOptions from '../components/ProductsOptions'
import {productsData} from '../utilities/data'

export default function ProductDetails(props) {
    const relatedProduct = productsData.find( item => item.id ===  props.match.params.id)
    console.log('relatedProduct: ', relatedProduct)
    return (
        <div style={{display: 'flex'}}> 
            <ProductsOptions />
            <div style={{display: 'flex', width: '60%', flexDirection: 'column', paddingLeft: 10}}>
                {/* <p> {props.match.params.id}  </p> */}
                <h3> {relatedProduct.name} </h3>
                <p> {relatedProduct.description} </p>
                <hr style={{width: '100%'}} />
                <h5> {relatedProduct.status} </h5>
            </div>
        </div>
    )
}
