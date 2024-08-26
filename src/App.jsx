import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Statistics from "./components/statistics/Statistics";
import Portfolio from "./components/portfolio/Portfolio";
import Reviews from "./components/reviews/Reviews";
import Contact from "./components/contact/Contact";
import Skills from "./components/skills/Skills";
import Footer from "./components/footer/Footer";
import "./App.scss";

function App() {
  return (
    <>
      <Navbar />
      <section>
        <Hero />
      </section>
      <section className="gray-color">
        <Statistics />
      </section>
      <section id="Skills">
        <Skills />
      </section>
      <section id="Portfolio " className="gray-color">
        <Portfolio />
      </section>
      <section id="Testemonials">
        <Reviews />
      </section>
      <section id="Contact " className="gray-color">
        <Contact />
      </section>
      <Footer />
    </>
  );
}

export default App;
