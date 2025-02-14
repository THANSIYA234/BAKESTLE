import React ,{createContext, useState,useEffect}from "react";
import allproduct from '../Components/assets/allproduct';




export const ShopContext=createContext(null);
const getDefualtCart=()=>{
    let cart={};
    for (let index = 0; index < allproduct.length+1; index++) {
       cart[index]=0
        
    }
    return cart;
}
const ShopContextProvider = (props) => {
    
    const [cartItems, setCartItems] = useState(() => {
        const savedCart = localStorage.getItem("cart");
        return savedCart ? JSON.parse(savedCart) : getDefualtCart();
    });

    
    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cartItems));
    }, [cartItems]);

        
   const addToCart=(itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
   }
   console.log (cartItems);
   const removeFromCart=(itemId)=>{
    setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
}
const getTotalAmountOfCart = () => {
    let totalAmount = 0;
    
    for (const item in cartItems) { 
        if (cartItems[item] > 0) {
            let itemInfo = allproduct.find((product) => product.id === Number(item));
            if (itemInfo) { 
                totalAmount += itemInfo.price * cartItems[item];
            }
        }
    }
    
    return totalAmount; 
};
const getTotalCartItems=()=>{
    let totalItem=0
    for(const item in cartItems){
        if(cartItems[item]>0){
            totalItem+=cartItems[item]
        }
    }
    return totalItem;
}

    
const contextValue={allproduct,cartItems,addToCart,removeFromCart,getTotalAmountOfCart,getTotalCartItems};


    return(
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider;