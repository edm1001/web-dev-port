import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Welcome from './Components/Welcome/Welcome.js';
import About from './Components/About/About.js';
import Services from './Components/Services/Services'
import Projects from './Components/Projects/Projects';
function App() {
  return (
    <>
    <Welcome/>
    <About/>
    <Services/>
    <Projects/>
    </>
      );
}

export default App;
