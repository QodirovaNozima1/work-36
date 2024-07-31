import logo from './logo.svg';
import './App.css';
import Header from './components/Header/header';
import Hero from './components/hero/hero';
import Service from './components/service/service';
import About from './components/about/about';
import Succes from './components/succes/succes';
import Clients from './components/testimonal/testimonal';
import Blog from './components/blog/blog';
import Signup from './components/signup/signup';
import Footer from './components/footer/footer';
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
