import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Tools from "./components/Tools";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FloatingButton from "./components/FloatingButton";
import AllProjects from "./pages/Allprojects";

function Home() {
  return (
    <div className="antialiased min-h-screen relative flex flex-col">
      <Header />
      <Hero />
      <About />
      <Portfolio />
      <Tools />
      <Experience />
      <Contact />
      <FloatingButton />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/projects" element={<AllProjects />} />
      </Routes>
    </Router>
  );
}
export default App;
