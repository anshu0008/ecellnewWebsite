import { BrowserRouter, Routes, Route } from "react-router-dom";
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
  Footer
} from "./Components";

function App() {
  return (
    <BrowserRouter>
    <StarsCanvas />
      <Routes>
        <Route
          path="/"
          element={
            <div className="relative z-0 bg-primary">
              <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
                <Navbar />
                <Home />
              </div>
              <About />
              <Events />
              <Gallery />
              <Startups />
              <Wings />
              <Terstimonials />
              <div className="relative z-0 bg-primary">
                <StarsCanvas />
                <Contact />
                
              </div>
            </div>
          }
        />
        <Route
          path="/team"
          element={
            <div>
              <Navbar />
              <Team /> 
            </div>
          }
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
