import React, { useContext } from 'react';
import './CartItems.css';
import { ShopContext } from '../../Contexts/ShopContext';
import cross_icon from '../assets/cart_cross_icon.png';

const CartItems = () => {
    const { getTotalAmountOfCart,allproduct, cartItems, removeFromCart } = useContext(ShopContext);
    

    return (
        <div className="cartitems">
            <div className="cartitem_format_main">
                <p>Product</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            {allproduct.length === 0 || Object.keys(cartItems).every(id => cartItems[id] === 0) ? (
                <p>Your cart is empty.</p>
            ) : (
                allproduct.map((e) => {
                    if (cartItems[e.id] > 0) {
                        return (
                            <div key={e.id}>
                                <div className="cartitems_format cartitem_format_main">
                                    <img src={e.image} alt={`${e.name} product`} className="cartitem_product" />
                                    <p>{e.name}</p>
                                    <p>₹{e.price}</p>
                                    <button className="cartitem_quantity">{cartItems[e.id]}</button>

                                    <p>₹{e.price * cartItems[e.id]}</p>
                                    <img

                                        src={cross_icon}
                                        alt="Remove item"
                                        onClick={() => removeFromCart(e.id)}
                                        className="cartitem_remove"
                                    />
                                </div>
                                <hr />
                            </div>
                        );
                    }
                    return null;
                })
            )}
            <div className="cart_items_down">
                <div className='cart_items_total'>
                    <h1>Cart Totals</h1>
                    <hr/>
                    </div>
                    <div>
                        <div className="cartitems_totalitems">
                            <p>SubTotal</p>
                            <p>₹{getTotalAmountOfCart()}</p>
                        </div>
                        <hr/>
                        <div className='cartitems_totalitems'>
                            <p>Free shipping</p>
                            <p>shipping to kerala</p>
                        </div>
                        <hr/>
                        <div className='cartitems_totalitems'>
                           <h3>Total</h3>
                           <h3>₹{getTotalAmountOfCart()}</h3>

                        </div>
                        <hr/>
                        <button className='buynow '>BUY NOW</button>



                        
                    
                </div>
            </div>
        </div>
    );
};

export default CartItems;
