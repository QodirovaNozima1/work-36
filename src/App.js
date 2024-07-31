import logo from './logo.svg';
import './App.css';
import Header from './components/Header/header';
import Hero from './components/Hero/hero';
import Service from './components/Service/service';
import About from './components/About/about';
import Succes from './components/Succes/succes';
import Clients from './components/Testimonal/testimonal';
import Blog from './components/Blog/blog';
import Signup from './components/Signup/signup';
import Footer from './components/Footer/footer';
function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <Service/>
      <About/>
      <Succes/>
      <Clients/>
      <Blog/>
      <Signup/>
      <Footer/>
    </div>
  );
}

export default App;
