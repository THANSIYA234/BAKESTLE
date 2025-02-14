import React from 'react'
import './Catlog.css'
import catlog_products from '../assets/catlog_products'
import Item from '../Items/Item'

const Catlog = () => {
  return (
    
    <div className='catlog'>
    
    <h1>Catalog</h1>
    
    <div className='catlog-items'>
      {catlog_products.map((item,i)=>{
        return  <Item key={i} id={item.id}name={item.name}image={item.image} price={item.price}/>
      })}
    </div>
    </div>
  )
}

export default Catlog