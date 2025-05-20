
import './App.css';
import Navbar from './Components/Navbar';
import Carousel from './Components/Carousel';
import Cards from './Components/Cards';
import About from './Components/About';
import Courses from './Components/Courses';
import Popular from './Components/Popular';
import Experts from './Components/Experts';
import Footer  from './Components/Footer';

function App() {
  return (
    <div>
      <Navbar/>
      <Carousel/>
      <Cards/>
      <About/>
      <Courses/>
      <Popular/>
      <Experts/>
      <Footer/>
    </div>
  );
}

export default App;
