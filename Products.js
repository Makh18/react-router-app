import React from 'react'
import ProductsOptions from '../components/ProductsOptions'

export default function Products() {
    return (
        <div style={{display: 'flex'}}>
            <ProductsOptions />
            <div style={{display: 'flex', justifyContent: 'center', width: '60%'}}>
                <p>Please select a product</p>
            </div>
        </div>
    )
}
