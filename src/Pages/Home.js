import Welcome from '../Components/Welcome/Welcome';
// import Banner from '../Components/Banner/Banner'
import About from '../Components/About/About.js';
import Services from '../Components/Services/Services'
import Projects from '../Components/Projects/Projects';
import Contact from '../Components/Contact/Contact';
import Reviews from '../Components/Reviews/Reviews';


const Home = () => {
    return (
        <>
        <Welcome/>
        <About/>
        <Services/>
        <Projects/>
        <Contact/>
        <Reviews/>
        </>
    )
}
export default Home;