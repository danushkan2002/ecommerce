import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';

function App() {
  return (
    <Router className="App">
      <Header/>
      <main className='py-3 min-h-[80vh]'>
        <Routes>
          <Route path='/' element={<HomeScreen/>} />
          <Route path='/Product/:id' element={<ProductScreen/>} />
          <Route path='/Cart/:productId' element={<CartScreen/>} />
        </Routes>
      </main>
      <Footer/>
    </Router>
  );
}

export default App;
