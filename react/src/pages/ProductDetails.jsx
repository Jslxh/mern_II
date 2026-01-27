import React from 'react'
import { useParams } from 'react-router-dom'
const ProductDetails = () => {
    const products=[
    {id:1, name:"Laptop", price:"100000",description:"Infinix X2 Slim Laptop with 11th Gen Intel Core i7 Processor"},
    {id:2, name:"Mouse", price:"2000",description:"Portronic Wireless Mouse with USB Receiver"},
    {id:3, name:"Cable", price:"300",description:"Durable USB-C to USB-A Cable"},
    {id:4, name:"Hub", price:"1500",description:"Multiport USB Hub with HDMI and Ethernet"},
    {id:5, name:"Headphone", price:"3000",description:"BOAT Rockerz 255 Pro+ Wireless Bluetooth Headphone"},
    ]
    const {id} = useParams();
    const product = products.find((p)=>p.id === Number(id))
  return (
    <div>
        <h1>Product Details</h1>
        <h2>{product.name}</h2>
        <p>Price: ₹{product.price}</p>
        <p>{product.description}</p>
    </div>
  )
}

export default ProductDetails