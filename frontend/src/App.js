import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import ProfileScreen from './screens/ProfileScreen';
import ShippingScreen from './screens/ShippingScreen';
import PaymentScreen from './screens/PaymentScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';

function App() {
  return (
    <Router className="App">
      <Header/>
      <main className='py-3 min-h-[80vh]'>
        <Routes>
          <Route path='/' element={<HomeScreen/>} />
          <Route path='/Product/:id' element={<ProductScreen/>} />
          <Route path='/Login' element={<LoginScreen/>} />
          <Route path='/Register' element={<RegisterScreen/>} />
          <Route path='/Profile' element={<ProfileScreen/>} />
          <Route path='/Payment' element={<PaymentScreen/>} />
          <Route path='/PlaceOrder' element={<PlaceOrderScreen/>} />
          <Route path='/Shipping' element={<ShippingScreen/>} />
          <Route path='/Cart/:productId' element={<CartScreen/>} />
        </Routes>
      </main>
      <Footer/>
    </Router>
  );
}

export default App;
