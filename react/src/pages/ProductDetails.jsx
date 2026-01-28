import React from 'react'
import { useParams } from 'react-router-dom'
import {useState,useEffect} from 'react'
const ProductDetails = () => {
    const [product, setProduct] = useState({})
    const {id} = useParams();
    useEffect(()=>{
        fetch(`https://fakestoreapi.com/products/${id}`)
        .then(response => response.json())
        .then(data => setProduct(data));
    },[])

  return (
    <div>
        <h1>Product Details</h1>
        <h2>{product.title}</h2>
        <p><b>Price: </b>₹{product.price}</p>
        <p>
            <b>Description: </b>
            {product.description}
        </p>
        <p>
            <b>Category: </b>
            {product.category}
        </p>
    </div>
  )
}

export default ProductDetails