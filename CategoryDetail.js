import React from 'react'
import CategoriesOptions from '../components/CategoriesOptions'

export default function CategoryDetail(props) {
    console.log('props: ', props)
    return (
        <div style={{backgroundColor: 'lightblue'}}>
            <CategoriesOptions />
            <p> {props.match.params.name} </p>
        </div>
    )
}
