import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  LearningNow,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
  Courses,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Courses />
        <LearningNow />
        <div className=" relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
