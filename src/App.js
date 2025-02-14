import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import { createRootRoute, createRoute, createRouter, Outlet, RouterProvider } from '@tanstack/react-router';
import Home from './Pages/Home';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import LoginSignup from './Pages/LoginSignup';
import Cart from './Pages/Cart';
import Footer from './Components/Footer/Footer';
import Resetpassword from './Pages/Resetpassword';

// Define the Root Route
const RootRoute = createRootRoute({
  component: () => (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  ),
});

// Define Individual Routes
const HomeRoute = createRoute({
  getParentRoute: () => RootRoute,
  path: '/',
  component: Home,
});

const CakesRoute = createRoute({
  getParentRoute: () => RootRoute,
  path: '/Cakes',
  component: () => <ShopCategory category="Cakes" />,
});

const MacronsRoute = createRoute({
  getParentRoute: () => RootRoute,
  path: '/Macrons',
  component: () => <ShopCategory category="Macrons" />,
});

const CupcakesRoute = createRoute({
  getParentRoute: () => RootRoute,
  path: '/Cupcakes',
  component: () => <ShopCategory category="Cupcakes" />,
});

const ProductRoute = createRoute({
  getParentRoute: () => RootRoute,
  path: '/product/$productId', // Dynamic Route
  component: Product,
});

const CartRoute = createRoute({
  getParentRoute: () => RootRoute,
  path: '/cart',
  component: Cart,
});

const LoginRoute = createRoute({
  getParentRoute: () => RootRoute,
  path: '/login',
  component: LoginSignup,
});
const ResetpasswordRoute = createRoute({
  getParentRoute: () => RootRoute,
  path: '/resetpassword',
  component: Resetpassword,
});

// Create the Router
const routeTree = RootRoute.addChildren([
  HomeRoute,
  CakesRoute,
  MacronsRoute,
  CupcakesRoute,
  ProductRoute,
  CartRoute,
  LoginRoute,
  ResetpasswordRoute
]);

const router = createRouter({ routeTree });

function App() {
  return <RouterProvider router={router} />;
}

export default App;
