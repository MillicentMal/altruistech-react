import './App.css';
import Home from './components/Home';
import {Route, Routes} from 'react-router-dom';
import Kadula from './components/Kadula';
import Health from './components/Health';
import Hub from './components/Hub';
import Water from './components/Water';
import Env from './components/Env';
import About from './components/About';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Mission from './components/Mission';
import TeamCard from './components/TeamCard';
import TeamGrid from './components/TeamGrid';
// import Testimonial from './components/Testimonial';

function App() {
  return (
    <div className="App">
      <Routes>

        <Route path="/" element={<Home/>}/>
        <Route path="/kadula-farms" element={<Kadula/>}/>
        <Route path="/altruis-health" element={<Health/>}/>
        <Route path="/creativity-hub" element={<Hub/>}/>
        <Route path= "/clean-water-innovation" element={<Water/>}/>
        <Route path= "/environmental-compliance-innovation" element={<Env/>}/>
        <Route path= "/about" element={<About/>}/>
        <Route path= "/team" element={<Team/>}/>
        <Route path= "/contact-us" element={<Contact/>}/>

      </Routes>
      {/* <Testimonial/> */}
      <Mission/>
<Footer/>
    </div>
  );
}

export default App;
