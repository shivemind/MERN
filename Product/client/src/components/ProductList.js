import React from 'react'
import axios from 'axios';
import {Link} from "react-router-dom"
    
const ProductList = (props) => {
    return (
        <div>
            {props.products.map( (product, i) =>
                <p key={i}>
                    <Link to={`/product/${product._id}`}> {product.title}</Link>, {product.description}</p>
            )}
        </div>
    )
}
    
export default ProductList;