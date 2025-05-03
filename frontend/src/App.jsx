import React from 'react';
import Navbar from './components/navbar/Navbar';
import {Route, Routes} from 'react-router-dom';
import Home from './pages/home/Home';
import Cart from './pages/cart/Cart';
import PlaceOrder from './pages/placeorder/PlaceOrder';
import Footer from './components/footer/Footer';
import LoginModal from './components/login/LoginModal';


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/login' Component={LoginModal}/>
        <Route path='/' Component={Home}/>
        <Route path='/cart' Component={Cart}/>
        <Route path='/order' Component={PlaceOrder}/>
      </Routes>
      <div id="contact">
        <Footer />
      </div>
    </>
  );
}

export default App;

