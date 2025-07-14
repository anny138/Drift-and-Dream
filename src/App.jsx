import {BrowserRouter as Router,Routes,Route,useLocation} from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import Login from './pages/Login';
import About from './pages/About';
import {ProductProvider} from './context/ProductContext';
import {CartProvider} from './context/CartContext';
import {ThemeProvider} from './context/ThemeContext';
import {UserProvider} from './context/UserContext';
import NavigationBar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';
const AppContent=()=>{
  const location = useLocation();
  const hideFooter = ['/login','/checkout'].includes(location.pathname);
  return(
    <div className="full-width-container">
      <NavigationBar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:category" element={<Products />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      {!hideFooter && <Footer />}
    </div>
  );
};
function App(){
  return(
    <ThemeProvider>
      <UserProvider>
        <ProductProvider>
          <CartProvider>
            <Router>
              <AppContent />
            </Router>
          </CartProvider>
        </ProductProvider>
      </UserProvider>
    </ThemeProvider>
  );
}
export default App;
