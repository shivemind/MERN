import React, { useEffect, useState } from 'react'
import axios from 'axios';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';
    
const Main = (props) => {
    const [product, setProduct] = useState([]);
    const [loaded, setLoaded] = useState(false);
    
    useEffect(()=>{
        axios.get('http://localhost:8011/api/product')
            .then(res=>{
                console.log(res.data.data)
                setProduct(res.data);
                
                setLoaded(true);
            })
            .catch(err => console.error(err));
    },[]);
    
    const removeFromDom = productId => {
        setProduct(product.filter(product => product._id != productId));
    }
    
    return (
        <div>
            <ProductForm/>
            <hr/>
            {loaded && <ProductList product={product} removeFromDom={removeFromDom}/>}
        </div>
    );
}
    
export default Main;