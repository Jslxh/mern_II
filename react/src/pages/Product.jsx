import React from 'react'
import { Link } from 'react-router-dom'
const Product = () => {
  const products=[
    {id:1, name:"Laptop", price:"100000"},
    {id:2, name:"Mouse", price:"2000"},
    {id:3, name:"Cable", price:"300"},
    {id:4, name:"Hub", price:"1500"},
    {id:5, name:"Headphone", price:"3000"},
  ]
  return (
    <div>
      <h1>Products</h1>
      {products.map((product)=>(
        <div key = {product.id}>
          <h4>{product.name}</h4>
          <h5>{product.price}</h5>
          <Link to={`/product/${product.id}`}>View Details</Link>
        </div>
      ))}
    </div>
  )
}

export default Product