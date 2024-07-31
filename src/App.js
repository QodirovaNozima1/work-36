import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import Ability from './components/ability/Ability';
import About from './components/about/About';
import Succes from './components/succes/Succes';
import Clients from './components/testimonal/Testimonal';
import Blog from './components/blog/Blog';
import Signup from './components/signup/Signup';
import Footer from './components/footer/Footer';
function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <Ability/>
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
