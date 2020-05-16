import React from 'react'
import {productsData} from '../utilities/data'
import { Link } from 'react-router-dom'

export default function ProductsOptions() {
    return (
        <div style={{backgroundColor: 'lightgrey', padding: 10, margin: 10,display: 'inline-block'}}>
            <h1>Products</h1>
            {productsData.map(product => (
                <div key={product.id} style={{marginBottom: 6}}>
                    <Link to={`/products/${product.id}`}> {product.name} </Link>    
                </div>
            ))}
        </div>
    )
}
