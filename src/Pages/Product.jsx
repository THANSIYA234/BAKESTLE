import React, { useContext } from 'react'
import { ShopContext } from '../Contexts/ShopContext'
import { useParams } from '@tanstack/react-router';
import Breadcrum from '../Components/Breadcrump/Breadcrum';
import ProductDisplay from '../Components/Productdisply/ProductDisplay';
import Description from '../Components/Description/Description';
import RelatedProducts from '../Components/Related_products/RelatedProducts';

const Product = () => {
  const {allproduct}=useContext(ShopContext);
  const {productId}=useParams({strict:false});
  const product=allproduct.find((e)=>e.id===Number(productId))
  return (
    <div>
      <Breadcrum product={product}/>
      <ProductDisplay product={product}/>
      <Description/>
      <RelatedProducts/>
    </div>
  )
}

export default Product