import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Course from './components/Course';
import Teachers from './components/Teachers';
import Price from './components/Price';
import Contact from './components/Contact';

function App() {
  return (
    <div className="">
      <Navbar/>
      <Home/>
      <Course/>
      <Teachers/>
      <Price/>
      <Contact/>
    </div>
  );
}

export default App;
