import logo from './logo.svg';
import './App.css';
import AddProduct from './pages/AddProduct';
import AboutUs from './pages/about_us';
import Contact from './pages/contact';
import OurProduct from './pages/our_product';
import Login from './pages/Login1';
import { BrowserRouter as Router, Route, Routes,Link } from 'react-router-dom';
import Home1 from './pages/home2';
import SignUp from './pages/Registeration'
import Header from './pages/header';
import Footer from './pages/footer';
import Product from './pages/Product';
import AdminHome from './pages/AdminHome';
import CakeCard from './pages/cakecard';
import IceCard from './pages/icecard';
import PastryCard from './pages/pastrycard';
import Customerlist from './pages/CustomerList';
import CustomerHome from './pages/CustomerHome';
import CustomerProfile from './pages/CustomerProfile';
import Cart from './pages/cart';

 function App() {
  return (
    <div>
   <Header></Header>
          <Routes >
         <Route  index element={<Home1/>}/>  
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/ourProduct" element={<OurProduct />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cakec" element={<CakeCard/>} />
           <Route path="/icec" element={<IceCard />} />
           <Route path="/pastryc" element={<PastryCard/>} />
            <Route path="/Registeration" element={<SignUp/>} /> 
            <Route path="/prod" element={<Product/>} /> 
            <Route path="/add" element={<AddProduct/>} />
            <Route path="/admin" element={<AdminHome/>} />
            <Route path="/clist" element={<Customerlist/>} />
            <Route path="/chome" element={<CustomerHome/>} />
            <Route path="/cProfile" element={<CustomerProfile/>} />
            <Route path="/cart" element={<Cart/>} />
          </Routes>
       {/* <Footer></Footer> */}
       </div>
      
  );
}

export default App;
