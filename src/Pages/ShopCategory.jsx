import React, { useContext } from 'react'
import './Css/ShopCategory.css'
import {ShopContext} from '../Contexts/ShopContext'
import Item from '../Components/Items/Item'



const ShopCategory = (props) => {
  const {allproduct}=useContext(ShopContext)
  return (
    <div className='shop-category'>
      <div className="shop-idex">
       
      </div>
      <div className="shopcategory-products">
        {allproduct.map((item,i)=>{
        if (props.category===item.category){
          return  <Item key={i} id={item.id}name={item.name}image={item.image} price={item.price}/>
        }
        else{
          return null;
        }
        })}
      </div>
    </div>
  )
}

export default ShopCategory;