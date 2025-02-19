import React, { useContext, useState } from 'react';
import './Navbar.css';
import logo from '../assets/logo .png';
import cart_icon from '../assets/cart_icon.png';
import { Link, useNavigate } from "@tanstack/react-router";
import { ShopContext } from '../../Contexts/ShopContext';
import { FirebaseContext } from '../../Contexts/FirebaseContext';
import { signOut } from 'firebase/auth';

export const Navbar = () => {
const { auth, user } = useContext(FirebaseContext);
const { getTotalCartItems } = useContext(ShopContext);
const navigate = useNavigate();
const [menu, setMenu] = useState("home");

const handleLogout = async () => {
try {
await signOut(auth);
console.log("User logged out");
} catch (err) {
console.error("Logout error:", err.message);
}
};

return (
<div className='Navbar'>
<div className='Nav-logo' onClick={() => navigate("/")}>
<img src={logo} alt="Bakestle Logo" />
</div>

<ul className='nav-menu'>
<li onClick={() => setMenu("home") }><Link to='/' style={{ textDecoration: 'none' }}>Home</Link>{menu === "home" ? <hr/> : null}</li>
<li onClick={() => setMenu("cakes")}><Link to='/Cakes' style={{ textDecoration: 'none' }}>Cakes</Link>{menu === "cakes" ? <hr/> : null}</li>
<li onClick={() => setMenu("macrons")}><Link to='/Macrons' style={{ textDecoration: 'none' }}>Macrons</Link>{menu === "macrons" ? <hr/> : null}</li>
<li onClick={() => setMenu("cupcakes")}><Link to='/Cupcakes' style={{ textDecoration: 'none' }}>Cupcakes</Link>{menu === "cupcakes" ? <hr/> : null}</li>
</ul>

<div className='nav-login-cart'>
{user ? (
          <div className="nav-user">
            <span>Hello, {user.name}</span>
            <button onClick={handleLogout}>Logout</button>
          </div>
        ) : (
          <button onClick={() => navigate({ to: "/login?mode=login"})}>Login</button>
        )}

<Link to={'/cart'} style={{ textDecoration: 'none' }}><img src={cart_icon} alt=''/></Link>
<div className='nav-cart-count'>{getTotalCartItems()}</div>
</div>


</div>
);
};