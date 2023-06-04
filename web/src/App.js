import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Events,
  Gallery,
  Home,
  Navbar,
  Startups,
  Terstimonials,
  Wings,
  StarsCanvas,
  Team,
} from './Components'

function App() {

  return (
    <BrowserRouter>
   <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Home />
        </div>
        <About />
        <Events />
        <Gallery />
        <Startups />
        <Wings />
        <Team />
        <Terstimonials />
        <div className='relative z-0'>
          <StarsCanvas />
          <Contact />
        </div>
      </div>
  </BrowserRouter>
  );
}

export default App;
