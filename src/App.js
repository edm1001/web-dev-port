import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Welcome from './Components/Welcome/Welcome.js';
import About from './Components/About/About.js';
import Services from './Components/Services/Services'
import Projects from './Components/Projects/Projects';
import Header from './Components/Navbar/Navbar';
import Contact from './Components/Contact/Contact';

function App() {
  return (
    <>
    <header>
    <Header/>
    </header>
    <main>
    <Welcome/>
    <About/>
    <Services/>
    <Projects/>
    <Contact/>
    </main>
    </>
      );
}

export default App;
