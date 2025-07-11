import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products'
import ProductDetail from './pages/ProductDetail'
import CartPage from './pages/CartPage'
import CheckoutPage from './pages/CheckoutPage'
import Login from './pages/Login'
import {ProductProvider} from './context/ProductContext'
import {CartProvider} from './context/CartContext'
import {ThemeProvider} from './context/ThemeContext'
import NavigationBar from './components/Navbar';
import About from './pages/About'; 
import './App.css'
function App() {
  return(
    <ThemeProvider>
      <ProductProvider>
        <CartProvider>
          <Router>
            <NavigationBar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/checkout" element={<CheckoutPage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </Router>
        </CartProvider>
      </ProductProvider>
    </ThemeProvider>
  );
}
export default App;
