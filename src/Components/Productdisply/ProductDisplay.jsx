import React, { useContext } from 'react';
import './ProductDisplay.css';
import star_dull_icon from '../assets/star_dull_icon.png';
import { ShopContext } from '../../Contexts/ShopContext';

const ProductDisplay = (props) => {
   
    const { product } = props;
    const {addToCart}=useContext(ShopContext);
    if (!product) {
        return <div>Product information is not available.</div>;
    }
  

    return (
        <div className="productdisplay">
            <div className="productdisplay_left">
                <img src={product.image || 'placeholder.jpg'} alt={product.name || 'Product'} />
            </div>
            <div className="productdisplay_right">
                <h1>{product.name || 'No name available'}</h1>
                <div className="productdisplay_star">
                    {[...Array(5)].map((_, index) => (
                        <img key={index} src={star_dull_icon} alt="star" />
                    ))}
                </div>
            
            <div className="productdisplay_prices">
            ₹{product.price || 'N/A'}
            </div>
            <div className='numberbox'>
            <input
                type="number"
                defaultValue="1"
                min="0"
                max="10"
                step="1"
            />


            </div>
            <div className="productdisplay_button">
                <button onClick={()=>addToCart(product.id)}>ADD TO CART</button>
            </div>
            </div>
        </div>
    );
};

export default ProductDisplay;
