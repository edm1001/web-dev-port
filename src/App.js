import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Welcome from './Components/Welcome/Welcome.js';
import About from './Components/About/About.js';
import Services from './Components/Services/Services'
import Projects from './Components/Projects/Projects';
import Header from './Components/Navbar/Navbar';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';

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
    <footer>
    <Footer/>
    </footer>
    </>
      );
}

export default App;
