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
  Courses,
} from "./components";
import { MergedCanvas } from "./components/canvas";
import Feedbacks from "./components/Feedbacks";

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
        {/* <Feedbacks /> */}
        <Courses />
        <LearningNow />

        <div className="relative z-0">
          <Contact />
          <div className="absolute inset-0 w-screen h-full z-[-1] pointer-events-none">
            <MergedCanvas scene="stars" />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
