import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './Components/Home/Home.css';
import './Components/About/About.css';
import './Components/Skills/Skills.css';
import './Components/Projects/Projects.css';
import './Components/Contact/contact.css';
import Home from './Components/Home/Home.jsx';
import About from './Components/About/About.jsx';
import Skills from './Components/Skills/Skills.jsx';
import Projects from './Components/Projects/Projects.jsx';
import Contact from './Components/Contact/Contact.jsx';
import Navbar from './Components/Navbar.jsx';


function App() {


  return (
    <div className='App'>
          <Navbar/>
          <Home/>
          <About/>
          <Skills/>
          <Projects/>
          <Contact/>
    </div>
  )
}

export default App
