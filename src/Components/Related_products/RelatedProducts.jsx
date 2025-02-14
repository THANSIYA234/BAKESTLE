import React from 'react'
import './RelatedProducts.css'
import data_products from '../assets/data'
import Item from '../Items/Item'
const RelatedProducts = () => {
  return (
    <div className='related_products'>
        <h1>Related Products</h1>
        
        <div className="related_products_items">
            {data_products.map ((item,i)=>{
                return <Item key={i} id={item.id}name={item.name}image={item.image} price={item.price}/>
            })}
        </div>
    </div>
  )
}

export default RelatedProducts