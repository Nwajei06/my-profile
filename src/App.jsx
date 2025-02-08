import './App.css'
import Nav from "./components/Nav";
import Sec from "./components/Sec";
import Hero from './components/Hero';
import Specialties from './components/Specialties';
// import Projects from './components/projects';
import Footer from './components/Footer';


function App() {

  return (
    <div>
      <Nav/>
      <Sec/>
      <Hero/>
      <Specialties/>
      {/* <Projects/> */}
      <Footer/>
    </div>
  )
}

export default App
