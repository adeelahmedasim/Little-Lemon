import './App.css';
import Navbar from './components/Navbar';
//import Header from './components/Header';
import Main from './components/Main';
import Testimonials from './components/Testimonials';
import About from './components/About';
import Footer from './components/Footer';
import MenuItems from './components/MenuItems';
//import { Route, Routes } from 'react-router-dom';
function App() {
  return (
    <>
    <Navbar/>
    <Main/>
    <MenuItems/>
    <Testimonials/>
  <About/>
  
    <Footer/>
    </>
  );
}

export default App;
